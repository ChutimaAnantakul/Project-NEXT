import React from "react";
import Link from "next/link";

function index(props) {
  return (
    <>
      <div class="content-top">
        <div class="container ">
          <div class="spec ">
            <h3>SkinCare Products</h3>
            <div class="ser-t">
              <b></b>
              <span>
                <i></i>
              </span>
              <b class="line"></b>
            </div>
          </div>
          <div class="tab-head ">
            <div class=" tab-content tab-content-t ">
              <div class="tab-pane active text-style" id="tab1">
                <div class=" con-w3l">
                  {/* <!-- loop --> */}

                  <div className="row">
                    {props.data.map((data) => (
                      <div class="col-md-3 m-wthree col-m">
                        <a>
                          <img
                            className="default-img"
                            src={data.image_path}
                            alt="#"
                          />
                          {/* <img className="hover-img" src={data.product_img} alt="#" /> */}
                        </a>
                        <div class="mid-1">
                          <div class="women">
                            <h6>
                              <a href="<%- /detail/+product._id %>">
                                {data.product_name}
                              </a>
                            </h6>
                          </div>
                          <div class="mid-2">
                            <p>
                              <label>
                                ${data.price}
                                0.00
                              </label>
                              <em class="item_price">
                                ${data.price}
                                .00
                              </em>
                            </p>

                            <div class="clearfix"></div>
                          </div>
                          <form method="post" action="/addToCart">
                            <button
                              type="submit"
                              class="btn btn-danger my-cart-btn my-cart-b"
                              name="add_to_cart"
                              value="<%= product.product_name %>"
                            >
                              Add to cart
                            </button>
                          </form>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
