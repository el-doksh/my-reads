import React, { useEffect, useState } from "react";
import { ReactComponent as CameraSvg } from "./camera.svg";
import CamSvg from "./camera.svg";
import './CanvasDraw.scss'

export const CanvasDraw = () => {
  const [color, setColor] = useState('#000');

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const cameraURL = 'https://test-navigate-files.s3.us-east-2.amazonaws.com/5235/maps/tags/1703678608-674cc5d44e659f0b3240bc583c42325d.svg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJIMEYCIQDqjlEtPQbjmIJxWe24gFK%2B5UjzjDhEBZM%2B5K%2BjqN%2BWmwIhAOVX%2FPJH62WkehLhyGrF5rbtajWG1Qidg%2BNsw%2B%2FwMroEKr0FCEoQAhoMODM3MjM4NTE4MDQxIgxHRPhW4tWsrXzsdRUqmgWC0LfZ2aWz2Ft6aN1%2BN5c5ykq%2FoYUi4otQxFcxeFnG3ioryN77N1ryumWEoJdkg0QKrx5JU%2FhQJ1zFrY%2FKYyzKQJGdrcvxNVIr7n6KXX0uPtZeykWNjPkCGfeqb6yLxSx8IlEcXAZFjF%2B%2F%2BmlRoJZLa7xCfbo77n13q8qlpEtopBqNB6j3gchJ4blepVf6uqEcIwe7kXQyRfGXCMN8qqLrlu%2BxxHSfZr%2BTKHWYrY5sKUv5amGGLsDs%2F8JWMZw3sb7SZ3HCHKC45DeVl%2F5d1GDlXXU394LLbeL5omCTs7UegXn8AGao%2FQup5rn0he%2Bl4kniu2OrYdx7jlal%2BOFmtXoSY%2BrklgmlQyNfzOBKT6Zp1JfqPjn2QyRchdKXGcm0MfsY%2BKJ2td6x9G8XZGBL5E6yfmmKmNIHp2rHDkSjyrVa0qjS%2FWMPEBAHeJIluzn7kEE4wxZ8Ix79OawQutlVZNjp9QboVz7rlWagD54U%2BwhPMzxk%2BmoiKgH8ZEig0AhenNpi%2BXP1gYXy4V8uURqj%2Fxw%2BdWiRhKyyzp88ZcQm2Z7luaPTk0DAy1c2Hoe4DSRKTJbb8RNBfPsdt1yGe1FqauRB7uc2yg9wlNAyqT4RK2oeWyHvF6%2FvDCFue5wiV8aJW8EunjU4D94u7KYOVVJAIVbk2%2BiCcsDNNLa%2BGBMSHLAv83oXDJG1RX%2BJ9y%2FuTwWsoomsLUrc7l%2B2eZTnS7YrO9CNOgJZTHzJJFRVi9PdGaBd%2F5104C5%2BefF3yvd%2BjnJgUu8jkUaVqXOElt5uG5%2FvLeqa3x1PjrhU%2BSiOeQbH6ZVbYVJ%2Bnl7slgjZh9Wx7Raicn7pR9QdUnbpJHasu1PfAoAJj0%2BLomnhivyHGHbZ6LxN%2FE67PQ41JJcf9XwwpIrRrAY6sAHM9WfQCwY05hMCCfad0dt6OurxhTs2dNkZ3Ryq3KgfHTAHpA8k476hLrPSAoygGsQuNHdo6owRscF%2B%2FOl0L5W%2BskO6eBS5TE704dGUz%2BAnBxM5DWHL%2FN1lGD%2FVsMIh0WJQXR46JsZnmzBu4A2l8RW07bmqTGpDaXm32ll8p1TqlG%2B%2BW5LS21jEQ5xqlmk7J%2FwU8vB4xMO6ri7pIpX94sgZDOrK2glNs3LKC6H6gGq0mQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4F32N6EM6YKLYFGX%2F20240102%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240102T180746Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=969a515f2b9992c0096f0ffd2a99dc5f5eb37a7b3e5fabab1ca5bc7b9f9a5158';

  const tigerURL ='https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg';
  const whiteIcon = 'https://test-navigate-files.s3.us-east-2.amazonaws.com/5235/maps/tags/1704201257-674cc5d44e659f0b3240bc583c42325d.svg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJGMEQCIDKqBuaIZEfRifgLK8snGM%2FxVvn0KdyaDhzBuk%2B9ygNGAiAz33LgNL3s0Gr04VBmQmuuMiSImD1X1ygVK8L0Rvq1%2Fiq8BQhLEAIaDDgzNzIzODUxODA0MSIMRsYz01VSX75sOpIAKpkFPZrDNJwlNT5gcGMee6F08e%2BQpBUP%2FC7TgFFlu5drfQmdxQCangpqvIiCVB31yhJtuhA679%2F5Y0cHJ0X3DBywlwt2PaP9mtCoodmpH1Xg6XtzIwcRNB3FwwQknnoCjQwK8Y3N2XK0P%2B%2B7GipTR6b1gi%2B1WcLgvH9jFlyMNkmXwaJliJkTa%2FWpzSBJBPjB4ScK60IAcjypth135e7q1BHDGYSim7CyN1s3yaoJDTVGuLY0qF4ywoTcHQOiExdfkxY2s%2BY0twi%2FNd%2FmbO94B5hanHdHeAi%2Bv1GBnQInByjybvY5qOBS88TZkho%2FSZB5gFiv8EjoABrjlICcPAhDuy67k6oOpArP3MEKgIl3x7nr4AlG9SkWXtEB9n1HQcfKhGtieIYlS5Zqq3%2F545CY08QuXrCKpELV6e3eg2y45RJG7t%2FtgR12Z7yNSxuBEUIXDiVRqOJoSxX0VLs5mNJkqfAX50p1SavLlM2yu7zMmQQiRmEzJSZ9blcmJErgTzoD8SQgXDaXarL2xcuqQJlYrc8X6QTIH6%2FR5oigS1F7%2Fl%2BJKyL6vUBY3qGqMC7UnUqYABnwHrwyXkBnQdoaJen7CsjyHJ%2BDejLXaymlz0iaXZyOkSGAQMav8YxLNZIoE8xpCj19DwXIJeDqW4RykdImXw3zKzq%2FqHsMuAArWWz%2BKThgcFMgDgp8t5X5x1oJD%2FW8ygIcnV5rjvxm9jht4d%2FuQ185YLIJg1Bg1t5w2PANblYflVGQoBqI4N3uWwDzs8reBWZooqrf7aiyI7h5oWlYDZacgYttRwBiiuUXb%2BenY%2Fx95viYp47dTbQW%2FngCe0D1pIb4POcbNJx66IFE94f2Yx326PGpXFh%2BmoYYQY7Ty1omG3dG0ZYOvwUoZn8w8aDRrAY6sgHc5Y6488afSJs0TtpXiigjt41oGaUDoUBvg3p3ibtFKHq5GvkeM9V1pHpweOeFeUgm5ztn3PnT65MSq2hzBTEblLPZVegR0fuGVkiVEA8DB60rcfrsHqVMfJ1dTVtw492BgdNKrarE1pqEXepnRTQRiM%2BrdaHuMu0%2B5xcSoX675MFOEHCg%2ByD2PGO4OdOiKmdGEpH55wdUG2g6sdw80MDsDHdxLu9oOfHcBwkrxl6edgLW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4F32N6EMR4LQA7VF%2F20240102%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240102T181156Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=13d27e40a9994268c6b43925fda97ab4190ce09456145a75cc8bccccc78c5d4a';


  // const img = new Image();
  // img.crossOrigin = 'anonymous'; // Enable CORS if needed

  // img.onload = () => {
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     context.drawImage(img, 0, 0);

  //     const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  //     const data = imageData.data;

  //     // Change the color of the SVG by manipulating its pixels
  //     for (let i = 0; i < data.length; i += 4) {
  //         if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0 && data[i + 3] === 255) {
  //             // Change black pixels to the new color
  //             data[i] = newColor[0]; // Red channel
  //             data[i + 1] = newColor[1]; // Green channel
  //             data[i + 2] = newColor[2]; // Blue channel
  //             // data[i + 3] is the alpha channel (transparency), it remains unchanged
  //         }
  //     }

  //     // Put the modified image data back onto the canvas
  //     context.putImageData(imageData, 0, 0);

  //     // Use the canvas as an image source (data URL)
  //     const modifiedImageURL = canvas.toDataURL();
  //     console.log({modifiedImageURL});

  //     // Use `modifiedImageURL` as needed, e.g., set it as a source for an <img> element
  //     // For example:
  //     // const modifiedImgElement = document.createElement('img');
  //     // modifiedImgElement.src = modifiedImageURL;
  //     // document.body.appendChild(modifiedImgElement);
  // };

  // img.src = iconURL;

  const onChangeHandler = e => {
    setColor(e.target.value)
  }
  
  const SVGWorking = ({ color }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill={color}
      class="bi bi-google"
      viewBox="0 0 16 16"
    >
      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
    </svg>
  );
  // filter: 'invert(13%) sepia(89%) saturate(4130%) hue-rotate(113deg) brightness(57%) contrast(66%)',


  const SVGWorking2 = ({ color, children }) => (
    <svg width="48" height="48" fill={color} class="bi bi-google" viewBox="0 0 16 16">
      {children}
    </svg>
  );
  const imageBtao = "data:image/svg+xml;base64," + window.btoa(cameraURL);
  const greenColor = '#006572';
  const whiteColor = '#fff';
  
        // style={{
        //   filter: 'invert(13%) sepia(89%) saturate(4130%) hue-rotate(113deg) brightness(57%) contrast(66%)',
        //   backgroundColor: 'white'
        // }}

    fetch(tigerURL, {mode:'no-cors'})
        .then(res => { 
          console.log({res} );
          return res.text()})
        .then(setSvg => {
          console.log({setSvg});
        })
        .catch(err => {
          console.log('err', err);
        })

  return (
    <div className="canvasdraw-conteiner">
      Hello Canvas
      <input onChange={onChangeHandler} value={color} />
      small Camera:
      <CameraSvg style={{ fill: color }} />
      camera SVG local component:
			<SVGWorking color={color} />
      camera SVG local path:
			<SVGWorking2 color={color}>
				<image href={CamSvg} fill="red" />
			</SVGWorking2>
      cameraURL:
			<SVGWorking2 color={color}>
				<image href={cameraURL} style={{
          // filter: 'invert(13%) sepia(89%) saturate(4130%) hue-rotate(113deg) brightness(57%) contrast(66%)',
          // filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(240deg) brightness(98%) contrast(105%)',
          // filter: ' invert(96%) sepia(4%) saturate(16%) hue-rotate(111deg) brightness(104%) contrast(105%)'
          
      filter: 'invert(100%)',
          // backgroundColor: 'white'

        }} />
			</SVGWorking2>
			<SVGWorking2 color={color}>
				<image src={tigerURL} />
			</SVGWorking2>
        <img src={cameraURL} style={{
          height: 90,
          width: 90,
          backgroundColor: 'white',
          filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(311deg) brightness(103%) contrast(102%);'
        }} />
        <svg>
        <image xlinkHref={tigerURL} src={tigerURL} />
      </svg>
    </div>

  )
}

      {/* <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"
      
      dangerouslySetInnerHTML={{ __html: CamSvg }}
      >
        <path
          d="M10 10 L90 10 L50 90 Z"
          fill={color} // Fill color controlled by state
        />
        
        // style={{
        //   filter: 'invert(13%) sepia(89%) saturate(4130%) hue-rotate(113deg) brightness(57%) contrast(66%)',
        //   backgroundColor: 'white'
        // }}
      </svg> */}
