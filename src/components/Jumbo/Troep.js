import { useState } from "react";
import React from 'react'

function Troep() {
	const [state, setstate] = useState({
		isLoaded: false,
		book: ''
	});

	const fbook = () => {
		setstate({
			isLoaded: true, 
			book: "mooi boek"});
			console.log("Boek");
			console.log(state);
	}

	const sbook = () => {
		// const showBook {isLoaded, book} = state;
	}

    return (
        <div>
			{state.book}
            <div class="cl-6 cl-s-6 cl-m-4 cl-l-4 cl-xl-2 product-list-item">
			<a href="https://www.jumbo.com/producten/jumbo-speculaas-brokken-375g-184135PAK?cb=product-card_wk48_184135PAK">
				<img class="optanon-category-J1000 packshotPromoCardHome full-width" src="https://www.jumbo.com/dam/homepage/2021/48/productwrapper/Speculaas-brokken.jpg" alt="Promo week 48"/>
				<div class="promoLabelHome">1+1 gratis</div>
				<div class="productInfoWrapper">
					<div class="product-9">
						<div class="titlePromoCardHome">Jumbo Speculaas Brokken</div>
						<div class="periodPromoCardHome">375 gram</div>
					</div>
					<div class="product-3 text-right">
						<span class="bigPrice">1</span><span class="smallPrice">18</span>
						<span class="unitPrice">3,15/kilo</span>
					</div>
				</div>					
				<div class="jum-button secondary">Bekijk <span class="smallHide">product</span></div>
			</a>
    		</div>
        </div>
    )
}

export default Troep
