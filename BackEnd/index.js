const body = document.getElementById("main-body");

const data = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    console.log(data);
    return data;
};

function addData(data) {
    data.forEach((user) => {
        const div = document.createElement("div");
        div.innerHTML = `<h1>${user.userName.middleName}</h1>
        <p>${user.email}</p>`;
        body.appendChild(div);
    });
}

async function createPosts(){
    const users = await data();
    addData(users);
}

createPosts();

function submitPost() {
    const post = {
        postId : document.getElementById("postId").value,
        content : document.getElementById("content").value,
        user : document.getElementById("userId").value
    }
    fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((json) => console.log(json));
}