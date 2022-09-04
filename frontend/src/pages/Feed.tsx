// import React from "react";
import styles from "../styles/Feed.module.css";
import Foostaram from '../images/Foostaram.svg';
import InputField from '../components/form/InputField';
import SubmitButton from '../components/form/SubmitButton';
import post1 from "../images/post1.jpg";
import avatar1 from "../images/avatar1.jpg"
// import posts from './db.json'

const Home = () => {
  return (

    <div className="m-12 w-4/5 h-full ml-auto mr-auto flex max-w-[550px]">
			<div className={`flex-auto w-14`}>
				<div className={`py-7 px-8 bg-white border ${styles.greyBorder}`}>

          <img alt="avatar"
            className="w-8 h-8 rounded-full border-2 border-gray-700 inline-block align-middle mb-4"
            src={avatar1}
          />
          <p className="font-medium text-md text-black-500 text-left inline-block ml-4 align-middle mb-4">
          skyemcalpine
					</p>
					<img
						alt="Post 1"
            className="mb-4"
						src={post1}
					/>

        <p className="text-sm text-black-500 text-left inline-block align-middle mb-4">
        Making strawberry and vodka jam 🍓
				</p>

					<form>
          <input
              className={`flex-1 p-2 rounded-sm mb-2 border hover:border-gray-500 focus-visible:border text-xs bg-white inline-block ${styles.greyBackground}`}
              placeholder="Type a comment..."
              type="string"
            />
						<button
              className="flex-auto ml-1 bg-insta-green text-white text-sm p-[7px] rounded-md font-medium inline-block"
              type="submit"
            >
              Post
            </button>
					</form>
				</div>
			</div>
		</div>



  );
};

export default Home;