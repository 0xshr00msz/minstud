import pic1 from './assets/gallery/img1.jpg'
import pic2 from './assets/gallery/img2.jpg'
import pic3 from './assets/gallery/img3.jpg'
import pic4 from './assets/gallery/img4.jpg'
import pic5 from './assets/gallery/img5.jpg'
import pic6 from './assets/gallery/img6.jpg'
import pic7 from './assets/gallery/img7.jpg'
import pic8 from './assets/gallery/img8.jpg'

export default function Gallery(){
	return (
		<div id="gallery">
			<h2>Cultural Gallery</h2>
			<img src={pic1}/>
			<p>Kaamulan Festival</p>
			<img src={pic2}/>
			<p>Kaliga Ritual Performed in a 'Tulugan'</p>
			<img src={pic3}/>
			<p>Tigwahanon tribesmen performing</p>
			<img src={pic4}/>
			<p>Celebration of the Kaamulan Festival</p>
			<img src={pic5}/>
			<p>Pulangi River</p>
			<img src={pic6}/>
			<p>A man playing Taglugul with a Kudlong</p>
			<img src={pic7}/>
			<p>Mt. Kitanglad Mountain Range</p>
			<img src={pic8}/>
			<p>Del Monte Pineapple Plantation in Manolo Fortich</p>
			
		</div>
	)
}
