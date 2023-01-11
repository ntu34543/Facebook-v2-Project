import firestore from "@react-native-firebase/firestore";


const USERS_COLLECTION = "users"
const POST_COLLECTTION = "posts";
const WISHLIST_COLLECTION = "wishList";
class Post {
	static getAll = async () => {
		const docs = (await firestore().collection(POST_COLLECTTION).get()).docs;
		const posts = docs.map((post) => ({...post.data(), id: post.id}));
		
		handler(posts);
	};

	static addAPost = async () => {
		return await firestore()
			.collection(POST_COLLECTTION)
			.add(data)
			.then(() => {
				onSucces && onSucces()
			})
			.catch(onError);
	};

	static deletePost = async () => {
		return await firestore().collection(POST_COLLECTTION).doc(id).delete();
	};
}

class WishList {
	static getAllByUID = async () => {
		const docs = (await firestore().collection<IWhitList>(`${USERS_COLLECTION}/${uid}/${WISHLIST_COLLECTION}`).get()).docs
		const wishList = docs.map((post) => ({...post.data(), id: post.id}))
		handler(wishList)
	};
	static love = async () => {
		await firestore().collection(`${USERS_COLLECTION}/${uid}/${WISHLIST_COLLECTION}`).doc(data.postId).set({img: data.img})
	}
	static disLove = async () => {
		await firestore().collection(`${USERS_COLLECTION}/${uid}/${WISHLIST_COLLECTION}`).doc(postId).delete()
	}
}
export { Post, WishList };
