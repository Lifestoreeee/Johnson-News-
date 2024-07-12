// script.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message envoyé !');
});

// Fonction pour ajouter un nouvel article de blog
function addBlogPost(title, content) {
    const blogSection = document.getElementById('blog');
    const newArticle = document.createElement('article');
    const articleTitle = document.createElement('h3');
    articleTitle.textContent = title;
    const articleContent = document.createElement('p');
    articleContent.textContent = content;