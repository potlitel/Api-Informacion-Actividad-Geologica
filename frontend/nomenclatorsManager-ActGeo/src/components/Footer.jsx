import "../footer.css"
import { Divider, Icon } from '@chakra-ui/react'
import { MdFacebook, MdSanitizer } from 'react-icons/md'
import { FaMountain } from 'react-icons/fa'
import { AiFillLinkedin, AiFillTwitterCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaBeer } from 'react-icons/fa';
import { Search2Icon } from '@chakra-ui/icons'
import facebook from "../images/facebook.png"

export default function Footer() { 
    return (
        <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6><Icon as={FaMountain} w={6} h={6}/> About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6><Icon as={FaMountain} w={6} h={6}/> Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6><Icon as={FaMountain} w={6} h={6}/> Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div class="container">
        <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
            <Divider orientation='horizontal'/>
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
            <a href="#"> Scanfcode</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><Icon as={MdFacebook} w={6} h={6}/></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"><Icon as={AiFillTwitterCircle} w={6} h={6}/></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"><Icon as={AiFillLinkedin} w={6} h={6}/></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"><Icon as={AiOutlineDribbble} w={6} h={6}/></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    )
}