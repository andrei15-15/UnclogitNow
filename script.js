// Handling Account Creation and Profile Setup
document.getElementById("accountForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate account creation success
  document.querySelector(".account-creation").classList.add("hidden");
  document.querySelector(".profile-setup").classList.remove("hidden");
});

document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate profile setup success
  document.querySelector(".profile-setup").classList.add("hidden");
  document.querySelector(".home-feed").classList.remove("hidden");
});

// Posting on the feed
document.getElementById("postButton").addEventListener("click", function () {
  const postContent = document.getElementById("postContent").value;
  if (postContent) {
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
      <p>${postContent}</p>
      <div class="post-actions">
        <button class="like-btn">👍 Like</button>
        <button class="comment-btn">💬 Comment</button>
        <button class="share-btn">🔁 Share</button>
      </div>
    `;
    document.getElementById("feed").appendChild(newPost);
    document.getElementById("postContent").value = "";
  }
});

// Simulate actions for each post (like, comment, share)
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("like-btn")) {
    e.target.textContent = "👍 Liked";
  }
  if (e.target.classList.contains("comment-btn")) {
    alert("Commenting on post...");
  }
  if (e.target.classList.contains("share-btn")) {
    alert("Sharing post...");
  }
});
// Handling Account Creation and Profile Setup
document.getElementById("accountForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate account creation success
  document.querySelector(".account-creation").classList.add("hidden");
  document.querySelector(".profile-setup").classList.remove("hidden");
});

document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate profile setup success
  document.querySelector(".profile-setup").classList.add("hidden");
  document.querySelector(".home-feed").classList.remove("hidden");
});

// Posting on the feed
document.getElementById("postButton").addEventListener("click", function () {
  const postContent = document.getElementById("postContent").value;
  if (postContent) {
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
      <p>${postContent}</p>
      <div class="post-actions">
        <button class="like-btn">👍 Like</button>
        <button class="comment-btn">💬 Comment</button>
        <button class="share-btn">🔁 Share</button>
      </div>
    `;
    document.getElementById("feed").appendChild(newPost);
    document.getElementById("postContent").value = "";
  }
});

// Simulate actions for each post (like, comment, share)
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("like-btn")) {
    e.target.textContent = "👍 Liked";
  }
  if (e.target.classList.contains("comment-btn")) {
    alert("Commenting on post...");
  }
  if (e.target.classList.contains("share-btn")) {
    alert("Sharing post...");
  }
});

// Handling Icon Clicks
document.getElementById("homeIcon").addEventListener("click", function () {
  document.querySelector(".home-feed").classList.remove("hidden");
  document.querySelector(".notifications").classList.add("hidden");
  document.querySelector(".friend-requests").classList.add("hidden");
  document.querySelector(".profile").classList.add("hidden");
});

document.getElementById("notificationIcon").addEventListener("click", function () {
  document.querySelector(".home-feed").classList.add("hidden");
  document.querySelector(".notifications").classList.remove("hidden");
  document.querySelector(".friend-requests").classList.add("hidden");
  document.querySelector(".profile").classList.add("hidden");
});

document.getElementById("friendRequestIcon").addEventListener("click", function () {
  document.querySelector(".home-feed").classList.add("hidden");
  document.querySelector(".notifications").classList.add("hidden");
  document.querySelector(".friend-requests").classList.remove("hidden");
  document.querySelector(".profile").classList.add("hidden");
});

document.getElementById("profileIcon").addEventListener("click", function () {
  document.querySelector(".home-feed").classList.add("hidden");
  document.querySelector(".notifications").classList.add("hidden");
  document.querySelector(".friend-requests").classList.add("hidden");
  document.querySelector(".profile").classList.remove("hidden");
});
