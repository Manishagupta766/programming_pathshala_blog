import "../css/Footer.css";

const Footer= ()=>{
    return(
        <>
            <div id="main">
                <div id="column1">
                    <div id="want_to">
                        <p>
                            Want To know more about our courses?
                        </p>
                    </div>
                    <div id="here">
                        <p>
                            Let's here all about it. Contact Us
                        </p>
                    </div>
                    <div id="contactus">
                        <div class="col">
                            <div class="tbox">Home</div>
                            <div class="tbox">Renaissance</div>
                            <div class="tbox">Course curriculum</div>
                        </div>
                        <div class="col">
                            <div class="tbox">Pricing</div>
                            <div class="tbox">Stories</div>
                            <div class="tbox">Blogs</div>
                        </div>
                        <div class="col">
                            <div class="tbox">Teach with Us</div>
                            <div class="tbox">Get Scholarship</div>
                            <div class="tbox">Terms & Conditions</div>
                            <div class="tbox">Refund Policy</div>
                            <div class="tbox">Careers</div>
                        </div>
                    </div>
                </div>
                <div id="column2">
                    <div id="main2">
                        <div id="logos">
                            <div id="logo">
                                <img src={require("../images/Group 4.png")} alt="" />
                            </div>
                            <div id="comp">
                                Programming Pathshala
                            </div>
                        </div>
                        <div id="sen1">
                            <p>
                                We help our users to build skills, which are valued and enabling them to believe in
                                themselves.
                            </p>
                        </div>
                        <div id="socialmedia">
                            <div class="box">
                                <img class="x" src={require("../images/linkedin (2) 4.png")} alt="" />
                            </div>
                            <div class=" box">
                                <img class="x" src={require("../images/youtube 4.png")} alt="" />
                            </div>
                            <div class="box">
                                <img class="x" src={require("../images/facebook 4.png")} alt="" />
                            </div>
                            <div class="box">
                                <img class="x" src={require("../images/instagram 4.png")} alt="" />
                            </div>
                            <div class="box">
                                <img class="x" src={require("../images/telegram 5.png")} alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="chatwithus">
                        <div id="pic">
                            <img src={require("../images/chat 4.png")} alt="" />
                        </div>
                        <div id="words">
                            Chat with an Expert
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyrights">
                All rights reserved with @Programming Pathshala
            </div>
        </>   
    );
}

export default Footer;