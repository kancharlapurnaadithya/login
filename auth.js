import { auth, signOut, onAuthStateChanged } from './firebase-config.js';

export const initAuthCheck = (pageContext) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // If logged in and on login page, go to dashboard
            if (pageContext === 'login') {
                window.location.href = 'dashboard.html';
            }
            updateProfileUI(user);
        } else {
            // If NOT logged in and on dashboard, go back to login
            if (pageContext === 'dashboard') {
                window.location.href = 'index.html';
            }
        }
    });
};

function updateProfileUI(user) {
    const name = document.getElementById('user-name');
    const email = document.getElementById('user-email');
    const photo = document.getElementById('user-photo');
    const card = document.getElementById('profile-card');

    if (name) name.textContent = user.displayName;
    if (email) email.textContent = user.email;
    if (photo) photo.src = user.photoURL;
    if (card) card.classList.remove('hidden');
}

export const logoutUser = () => {
    signOut(auth).then(() => {
        window.location.href = 'index.html';
    }).catch((error) => console.error("Logout Error:", error));
};