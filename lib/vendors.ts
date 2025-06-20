import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebase';

export interface Vendor {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  status: string;
}

export async function getVendors(): Promise<Vendor[]> {
  try {
    const giftsRef = collection(db, 'giftOfferings');
    const q = query(
      giftsRef,
      where('status', '==', 'active')
    );
    
    const querySnapshot = await getDocs(q);
    const vendorsMap = new Map<string, Vendor>();

    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      const vendorName = data.vendorName;
      
      if (vendorName && !vendorsMap.has(vendorName)) {
        let imageUrl = '';
        
        // Try to get vendor image from the first gift's image
        if (data.images && data.images.length > 0) {
          imageUrl = data.images[0].url;
        }
        
        vendorsMap.set(vendorName, {
          id: doc.id,
          name: vendorName,
          imageUrl: imageUrl,
          category: data.category || '',
          status: data.status || 'active',
        });
      }
    }

    return Array.from(vendorsMap.values());
  } catch (error) {
    console.error('Error fetching vendors:', error);
    return [];
  }
} 