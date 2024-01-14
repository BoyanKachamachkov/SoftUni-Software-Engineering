const tweetForm = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
	// Prevent the default event of sending the form so we can use it
	e.preventDefault();

	// comment value old way!
	// const usernameInput = document.querySelectorAll('input')[0].value;
	// const tweetInput = document.querySelectorAll('input')[1].value;

	// Check elements contentes
	const username = tweetForm.elements.username;
	const tweet = tweetForm.elements.tweet;

	addTweet(username.value, tweet.value);
	username.value = '';
	tweet.value = '';
});

const addTweet = (username, tweet) => {
	// create new Tweet, append everything to it
	const newTweet = document.createElement('li');
	const bTag = document.createElement('b');
	bTag.append(username);
	newTweet.append(bTag);
	newTweet.append(` - ${tweet}`);
	tweets.append(newTweet);
};
