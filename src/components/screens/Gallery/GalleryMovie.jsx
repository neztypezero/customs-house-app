import { useHistory } from 'react-router-dom';

function GalleryMovie(props) {
	const history = useHistory();
	const onMovieClick = (e) => {
		e.preventDefault();
		history.goBack();
	}

	return (
		<video onClick={(e) => {onMovieClick(e)}} id="gallerymovie" width="1920" height="1080" loop="loop" autoPlay="autoPlay" muted="muted">
			<source src="https://neilsondigital1.com/ch_touch/movie/CH_Video_2017.mp4" type="video/mp4" />
		</video>
	);
}

export default GalleryMovie;