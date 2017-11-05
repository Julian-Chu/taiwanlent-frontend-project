import React, { Component } from 'react';
import '../../styles/talents/talents.css';
import Filter from '../talents/Filter';

class Talents extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <div className="filter-body-overlay">
          <div className="product clearfix pf-dress detailView">
            <div className="closeDetailView"><button className="button button-mini button-circle button-red"><i className="icon-off"></i>Close</button></div>
            <div className="detailView-image ">
              <a href="# "><img src="images/shop/dress/1.jpg " alt="Checked Short Dress "></img></a>
              <div className="sale-flash">Qualified<br />Experienced</div>
            </div>
            <div className="product-desc center">
              <div className="product-title ">
                <h3><a href="# ">CLAIRE CHANG</a></h3>
              </div>
              <div className="product-price ">
                <div>語言:<span>德語/英語/中文</span></div>
                <div>專業背景:<span>化學</span></div>
              </div>
              <div className="product-rating ">
                <button className="button button-3d button-rounded" style={{backgroundColor:'#7CBAB7'}}>
                  <i className="icon-bookmark2"></i>
                  加入詢問清單</button>
              </div>
            </div>
          </div>
        </div>

        <section id="content">

                <div className="content-wrap">
                    <div className="container clearfix">
                        <Filter/>
           
                        <div className="fixedWin">
                            <p>0/10</p>
                            <button className="button button-mini button-border button-circle button-dark"><i className="icon-ok"></i>批量詢問</button>
                            <button className="button button-mini button-border button-circle button-dark"><i className="icon-repeat"></i>重置清單</button>
                        </div>

                        <div className="clear "></div>

                        <div id="shop " className="shop grid-container clearfix ">

                            <div className="product clearfix pf-dress ">
                                <div className="product-image ">
                                    <a href="# "><img src="images/shop/dress/1.jpg " alt="Checked Short Dress "></img></a>
                                    <div className="sale-flash">Qualified<br/>Experienced</div>
                                    <div className="product-overlay ">
                                        <a href="# " className="add-to-cart "><i className="icon-bookmark2 "></i><span> 加入詢問清單</span></a>
                                        <button className="item-quick-view "><i className="icon-zoom-in2 "></i><span> 查看資料</span></button>
                                    </div>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-title ">
                                        <h3><a href="# ">CLAIRE CHANG</a></h3>
                                    </div>
                                    <div className="product-price ">
                                        <div>語言:<span>德語/英語/中文</span></div>
                                        <div>專業背景:<span>化學</span></div>
                                    </div>
                                    <div className="product-rating ">
                                        <button className="button button-3d button-rounded" style={{backgroundColor:'#7CBAB7'}}>
                                            <i className="icon-bookmark2"></i>
                                            加入詢問清單</button>
                                    </div>

                                </div>
                            </div>

                            <div className="product clearfix pf-dress ">
                                <div className="product-image ">
                                    <a href="# "> <img src="images/team/Taiwanlent-Liu.jpg" alt="Taiwanlent-Liu"></img></a>
                                    <div className="product-overlay ">
                                        <a href="# " className="add-to-cart "><i className="icon-bookmark2"></i><span> 加入詢問清單</span></a>
                                        <a href="include/ajax/shop-item.html " className="item-quick-view " data-lightbox="ajax "><i className="icon-zoom-in2 "></i><span> 查看資料</span></a>
                                    </div>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-title ">
                                        <h3><a href="# ">LIU LI-TSE</a></h3>
                                    </div>
                                    <div className="product-price ">
                                        <div>語言:<span>德語/英語/中文</span></div>
                                        <div>學科:<span>化學</span></div>
                                    </div>
                                    <div className="product-rating ">
                                        <button className="button button-3d button-rounded" style={{backgroundColor:'#7CBAB7'}}>
                                                <i className="icon-bookmark2"></i>
                                                加入詢問清單</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product clearfix pf-Shoes ">
                                <div className="product-image ">
                                    <a href="# "><img src="images/shop/shoes/1.jpg " alt="Dark Brown Boots "></img></a>
                                    <div className="product-overlay ">
                                        <a href="# " className="add-to-cart "><i className="icon-shopping-cart "></i><span> Add to Cart</span></a>
                                        <a href="include/ajax/shop-item.html " className="item-quick-view " data-lightbox="ajax "><i className="icon-zoom-in2 "></i><span> Quick View</span></a>
                                    </div>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-title ">
                                        <h3><a href="# ">Slim Fit Chinos</a></h3>
                                    </div>
                                    <div className="product-price ">
                                        <div>語言:<span>德語/英語/中文</span></div>
                                        <div>學科:<span>化學</span></div>
                                    </div>
                                    <div className="product-rating ">
                                        <button className="button button-3d button-rounded" style={{backgroundColor:'#7CBAB7'}}>
                                                <i className="icon-bookmark2"></i>
                                                加入詢問清單</button>
                                    </div>
                                </div>
                            </div>


                            <div className="product clearfix pf-dress ">
                                <div className="product-image ">
                                    <a href="# "><img src="images/shop/dress/2.jpg " alt="Light Blue Denim Dress "></img></a>
                                    <div className="product-overlay ">
                                        <a href="# " className="add-to-cart "><i className="icon-shopping-cart "></i><span> Add to Cart</span></a>
                                        <a href="include/ajax/shop-item.html " className="item-quick-view " data-lightbox="ajax "><i className="icon-zoom-in2 "></i><span> Quick View</span></a>
                                    </div>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-title ">
                                        <h3><a href="# ">Light Blue Denim Dress</a></h3>
                                    </div>
                                    <div className="product-price ">
                                        <div>語言:<span>德語/英語/中文</span></div>
                                        <div>學科:<span>化學</span></div>
                                    </div>
                                    <div className="product-rating ">
                                        <button className="button button-3d button-rounded" style={{backgroundColor:'#7CBAB7'}}>
                                                <i className="icon-bookmark2"></i>
                                                加入詢問清單</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product clearfix pf-sunglass ">
                                <div className="product-image ">
                                    <a href="# "><img src="images/shop/sunglasses/1.jpg " alt="Unisex Sunglasses "></img></a>
                                    <a href="# "><img src="images/shop/sunglasses/1-1.jpg " alt="Unisex Sunglasses "></img></a>
                                    <div className="sale-flash ">Sale!</div>
                                    <div className="product-overlay ">
                                        <a href="# " className="add-to-cart "><i className="icon-shopping-cart "></i><span> Add to Cart</span></a>
                                        <a href="include/ajax/shop-item.html " className="item-quick-view " data-lightbox="ajax "><i className="icon-zoom-in2 "></i><span> Quick View</span></a>
                                    </div>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-title ">
                                        <h3><a href="# ">Unisex Sunglasses</a></h3>
                                    </div>
                                    <div className="product-price ">
                                        <div>語言:<span>德語/英語/中文</span></div>
                                        <div>學科:<span>化學</span></div>
                                    </div>
                                    <div className="product-rating ">
                                        <button className="btn btn-success">Add to List</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product clearfix pf-dress ">
                                <div className="product-image ">
                                    <a href="# "><img src="images/shop/tshirts/1.jpg " alt="Blue Round-Neck Tshirt "></img></a>
                                    <a href="# "><img src="images/shop/tshirts/1-1.jpg " alt="Blue Round-Neck Tshirt "></img></a>
                                    <div className="product-overlay ">
                                        <a href="# " className="add-to-cart "><i className="icon-shopping-cart "></i><span> Add to Cart</span></a>
                                        <a href="include/ajax/shop-item.html " className="item-quick-view " data-lightbox="ajax "><i className="icon-zoom-in2 "></i><span> Quick View</span></a>
                                    </div>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-title ">
                                        <h3><a href="# ">Blue Round-Neck Tshirt</a></h3>
                                    </div>
                                    <div className="product-price ">
                                        <div>語言:<span>德語/英語/中文</span></div>
                                        <div>學科:<span>化學</span></div>
                                    </div>
                                    <div className="product-rating ">
                                        <button className="btn btn-success">Add to List</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product clearfix pf-watch ">
                                <div className="product-image ">
                                    <a href="# "><img src="images/shop/watches/1.jpg " alt="Silver Chrome Watch "></img></a>
                                    <a href="# "><img src="images/shop/watches/1-1.jpg " alt="Silver Chrome Watch "></img></a>
                                    <div className="product-overlay ">
                                        <a href="# " className="add-to-cart "><i className="icon-shopping-cart "></i><span> Add to Cart</span></a>
                                        <a href="include/ajax/shop-item.html " className="item-quick-view " data-lightbox="ajax "><i className="icon-zoom-in2 "></i><span> Quick View</span></a>
                                    </div>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-title ">
                                        <h3><a href="# ">Silver Chrome Watch</a></h3>
                                    </div>
                                    <div className="product-price ">
                                        <div>語言:<span>德語/英語/中文</span></div>
                                        <div>學科:<span>化學</span></div>
                                    </div>
                                    <div className="product-rating ">
                                        <button className="btn btn-success">Add to List</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product clearfix pf-Shoes ">
                                <div className="product-image ">
                                    <a href="# "><img src="images/shop/shoes/2.jpg " alt="Men Grey Casual Shoes "></img></a>
                                    <a href="# "><img src="images/shop/shoes/2-1.jpg " alt="Men Grey Casual Shoes "></img></a>
                                    <div className="sale-flash ">Sale!</div>
                                    <div className="product-overlay ">
                                        <a href="# " className="add-to-cart "><i className="icon-shopping-cart "></i><span> Add to Cart</span></a>
                                        <a href="include/ajax/shop-item.html " className="item-quick-view " data-lightbox="ajax "><i className="icon-zoom-in2 "></i><span> Quick View</span></a>
                                    </div>
                                </div>
                                <div className="product-desc ">
                                    <div className="product-title ">
                                        <h3><a href="# ">Men Grey Casual Shoes</a></h3>
                                    </div>
                                    <div className="product-price ">
                                        <div>語言:<span>德語/英語/中文</span></div>
                                        <div>學科:<span>化學</span></div>
                                    </div>
                                    <div className="product-rating ">
                                        <button className="btn btn-success">Add to List</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    )
  }
}

export default Talents;