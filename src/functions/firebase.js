// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsMGVo7M0HZgAb-EdnN1aekK5nt8yNCzA",
  authDomain: "xspiracy-testing.firebaseapp.com",
  projectId: "xspiracy-testing",
  storageBucket: "xspiracy-testing.appspot.com",
  messagingSenderId: "732196846036",
  appId: "1:732196846036:web:07ddc207c68d5c1a89be41",
  measurementId: "G-8B9LVTGMGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export const getFirebase = ()=>{
    return app;
};

export const getSavedFireStore = ()=>{
    return firestore;
};

export const deleteCommentFromFireStore = async (commentId)=>{
  // console.log(commentId);
  await deleteDoc(doc(
    firestore,
    "comments",
    `collection-${1}-movie-${1}`,
    "contents",
    commentId
  ));

  toast.success("Comment deleted");
}

export const replyToACommentFireStore = async (commentObject, replyMessage)=>{
  const replyObject = [
    {
      comment: replyMessage,
      dateCommented: (new Date()).getTime(),
      userId: 0,
      user: {
        first_name: "Xspiracy",
        last_name: "Admin",
        photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fukrainian-bride.com%2Fuser%2Favatar%2F0%2F7%2FAdmin1_602d65a4c499c.png&f=1&nofb=1&ipt=35b1bd51c903cb974dfc295dc240b448c111f9ae42d93019f0cff6d22af37c9b&ipo=images"
      }
    }
  ];

  const newReplyObject = [
    ...(commentObject?.replies || []),
    ...replyObject
  ];

  await updateDoc(doc(
    firestore,
    "comments",
    `collection-${1}-movie-${1}`,
    "contents",
    commentObject.commentId
  ), {
    replies: newReplyObject
  });

  toast.success("Comment replied");
}