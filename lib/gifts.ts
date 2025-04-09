import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebase';

export interface Gift {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  vendor: string;
  status: string;
  leadTime: number;
}

export async function getMothersDayGifts(): Promise<Gift[]> {
  try {
    const giftsRef = collection(db, 'giftOfferings');
    const q = query(
      giftsRef,
      where('status', '==', 'active')
    );
    
    const querySnapshot = await getDocs(q);
    const gifts: Gift[] = [];

    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      let imageUrl = '';
      
      if (data.imagePath) {
        try {
          const imageRef = ref(storage, data.imagePath);
          imageUrl = await getDownloadURL(imageRef);
        } catch (error) {
          console.error('Error fetching image URL:', error);
        }
      }

      gifts.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        price: data.price,
        imageUrl: data.images[0].url,
        category: data.category,
        vendor: data.vendorName,
        status: data.status,
        leadTime: data.leadTime,
      });
    }

    return gifts;
  } catch (error) {
    console.error('Error fetching gifts:', error);
    return [];
  }
} 