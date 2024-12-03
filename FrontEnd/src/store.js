import { writable } from 'svelte/store';

// Create a writable store
const uData = {
	username: 'sujalbthapa',
	name: 'Sujal Bikram Thapa',
	flwrs: 1000,
	flwin: 100,
	psts: 10,
	desc: 'Lorem ipsum dolor sit 😂😋🤠amet consectetur, adipisicing elit. Earum debitis aliquam nemo vero, officia esse iusto est possimus ipsam ipsa eveniet atque quo. Cum, odit deserunt 😂😋🤠 illum incidunt unde fuga.'
};

const post = {
	uData,
	pTime: '01/12/2024',
	pTxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aliquid saepe, provident quisquam officiis porro maiores laudantium deserunt tempore natus ex quaerat illo omnis, harum ducimus fugit rem modi veritatis?'
};
export const usrData = writable(uData);
export const pstData = writable(post);
