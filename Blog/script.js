const apiUrl = 'https://jsonplaceholder.typicode.com';
let currentPage = 1;
const postsPerPage = 10;
let sortOrder = 'asc';
let debounceTimeout;

document.addEventListener("DOMContentLoaded", () => {
    fetchPosts();
    fetchUsers();
});

async function fetchPosts(page = 1, limit = postsPerPage, userId = null, sort = sortOrder) {
    try {
        let url = `${apiUrl}/posts?_page=${page}&_limit=${limit}&_sort=title&_order=${sort}`;
        if (userId) url += `&userId=${userId}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch posts");
        
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        displayError("Unable to load posts. Please try again later.");
    }
}

async function fetchUsers() {
    try {
        const response = await fetch(`${apiUrl}/users`);
        if (!response.ok) throw new Error("Failed to fetch users");

        const users = await response.json();
        const userDropdown = document.getElementById('userDropdown');
        userDropdown.innerHTML += users.map(user => `<option value="${user.id}">${user.name}</option>`).join('');
    } catch (error) {
        console.error("Error fetching users:", error);
        displayError("Unable to load user list. Please try again later.");
    }
}

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    postContainer.innerHTML = posts.map(post => `
        <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer" onclick="openPost(${post.id})">
            <h3 class="text-lg font-semibold mb-2">${post.title}</h3>
            <p class="text-gray-600">${post.body}</p>
        </div>
    `).join('');
}

function displayError(message) {
    const postContainer = document.getElementById('posts');
    postContainer.innerHTML = `<div class="text-center text-red-500 font-semibold">${message}</div>`;
}

function filterPostsByUser() {
    const userId = document.getElementById('userDropdown').value;
    currentPage = 1;
    fetchPosts(currentPage, postsPerPage, userId);
}

function nextPage() {
    debounce(() => {
        currentPage++;
        fetchPosts(currentPage, postsPerPage, document.getElementById('userDropdown').value);
    });
}

function prevPage() {
    if (currentPage > 1) {
        debounce(() => {
            currentPage--;
            fetchPosts(currentPage, postsPerPage, document.getElementById('userDropdown').value);
        });
    }
}

function sortPosts() {
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    fetchPosts(currentPage, postsPerPage, document.getElementById('userDropdown').value, sortOrder);
}
async function openPost(postId) {
    try {
        const post = await fetchData(`${apiUrl}/posts/${postId}`);
        const comments = await fetchData(`${apiUrl}/comments?postId=${postId}`);

        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html>
            <head>
                <title>${post.title}</title>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="p-8 bg-gray-100 text-gray-900">
                <h1 class="text-3xl font-bold mb-4">${post.title}</h1>
                <p class="text-lg mb-8">${post.body}</p>
                <h2 class="text-2xl font-semibold mb-4">Comments</h2>
                ${comments.map(comment => `
                    <div class="mb-4 p-4 bg-white border border-gray-200 rounded-lg">
                        <h4 class="font-semibold">${comment.name}</h4>
                        <p>${comment.body}</p>
                    </div>
                `).join('')}
            </body>
            </html>
        `);
    } catch (error) {
        console.error("Error loading post or comments:", error);
    }
}

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);
    return await response.json();
}

function debounce(func, timeout = 300) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(func, timeout);
}
