// script.js

document.addEventListener('DOMContentLoaded', () => {
    const postsDiv = document.getElementById('posts');
    const postInput = document.getElementById('postInput');
    const addPostButton = document.getElementById('addPostButton');
    const noPostsMsg = document.getElementById('noPostsMsg');

    let posts = [];

    function renderPosts() {
        postsDiv.innerHTML = '';
        if (posts.length === 0) {
            noPostsMsg.style.display = 'block';
        } else {
            noPostsMsg.style.display = 'none';
            posts.forEach((post, idx) => {
                const postEl = document.createElement('div');
                postEl.className = 'post';
                postEl.textContent = post;
                postsDiv.appendChild(postEl);
            });
        }
    }

    addPostButton.addEventListener('click', () => {
        const text = postInput.value.trim();
        if (text) {
            posts.push(text);
            postInput.value = '';
            renderPosts();
        }
    });

    renderPosts();
});