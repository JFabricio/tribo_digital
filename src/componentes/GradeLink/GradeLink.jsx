import React from "react";
import Imagem1 from"../GradeLink/img/banner.png" /*tamnaho img 180x1080 */
import Imagem2 from"../GradeLink/img/incluso.png" /*tamnaho img 900x600 */
import Imagem3 from"../GradeLink/img/negro.jpeg" /*tamnaho img 1520x1080 */
import "./GradeLink.css"

export default () =>

<div className="GradeLink">

<hr id="linha"/>
<div class="container2">
  <a href="#">
    <img id='imagem1' src={Imagem1} alt="img1" srcset="" ></img>
    <h2 id="texto-img1">Inclusão dos Negos</h2>
  </a>
  <a href="#">
    <img id='imagem2' src={Imagem2} alt="img2"  srcset="" ></img>
    <h2 id="texto-img2">Inclusão dos Negos</h2>
  </a>
  <a href="#">
    <img id='imagem3' src={Imagem3} alt="img2"  srcset="" ></img>
    <h2 id="texto-img3">Inclusão dos Negos</h2>
  </a>
</div>

</div>