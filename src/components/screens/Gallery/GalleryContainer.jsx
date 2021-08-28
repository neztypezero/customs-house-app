import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import SlideShow from "../../SlideShow/SlideShow";

import LoadingSVG from "../../LoadingSVG/LoadingSVG";
let ctx = require.context('../../../assets/img/gallery', true);

function GalleryContainer(props) {
	const [images, setImages] = useState([{src:"",alt:""}]);
	const { loading, error } = useQuery(props.query, {
			variables:props.variables,
			onCompleted:(data) => {
				let galleries = null;
				if (data.galleries && data.galleries.length > 0) {
					galleries = data.galleries[0];
					let imageList = [];
					if (galleries.images && galleries.images.length > 0) {
						for (let img of galleries.images) {
							imageList.push({
								src:ctx('./'+img.src).default,
								alt:img.alt,
							});
						}
						setImages(imageList);
					}
				}
			}
		}
	);
	const isLoading = () => (loading||images.length<1);

	if (error) return <div>error</div>;

	return (
		<>
			{(isLoading()?<LoadingSVG />:<></>)}
			<div className="slide-show-wrapper" data-loading={isLoading()}>
				<SlideShow images={images} />
			</div>
		</>
	);
}

export default GalleryContainer;
