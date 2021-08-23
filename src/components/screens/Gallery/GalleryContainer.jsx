import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import SlideShow from "../../SlideShow/SlideShow";

import LoadingSVG from "../../LoadingSVG/LoadingSVG";
let ctx = require.context('../../../assets/img/gallery', true);

function GalleryContainer(props) {
	const [images, setImages] = useState([]);
	const { loading, error } = useQuery(props.query, {
			variables:props.variables,
			onCompleted:(data) => {
				let galleries = null;
				if (data.galleries && data.galleries.length > 0) {
					galleries = data.galleries[0];
					if (galleries.images && galleries.images.length > 0) {
						setImages(galleries.images);
					}
				}
			}
		}
	);

	if (error) return <div>error</div>;
	if (loading || !images) return <LoadingSVG />;

	return (
		<>
			{(loading?<LoadingSVG />:<></>)}
			<div className="slide-show-wrapper" data-loading={loading}>
				{(loading||images.length<1?
					<></>
				:
					<SlideShow>
						{images.map(img => <img key={img.src} src={ctx('./'+img.src).default} alt={img.alt} />)}
					</SlideShow>
				)}
			</div>
		</>
	);
}

export default GalleryContainer;
