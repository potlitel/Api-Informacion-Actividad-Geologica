import "../bootstrap/bootstrap.min.css";
import "../bootstrap/bootstrap-icons.css";
import "../box.css"
import logo2 from "../images/pngwing.com (3).png"
import logo3 from "../images/kisspng-landscape-forest-geology-brazilian-landscape-5b1cfac2bbeb24.4545409115286258587697.png"
import logo4 from "../images/pngegg.png"
import logo5 from "../images/pngwing.com (4).png"
import logo6 from "../images/kisspng-computer-icons-petroleum-industry-oil-well-free-high-quality-geology-icon-5ab1219e08d1d7.4352733215215579180361.png"
import { Box, Text, Heading } from '@chakra-ui/react'


export default function GrupoMineralesList() { 
    return (
        <div class="main">
        <div class="clear"></div>

        <div class="g12">
          <Heading>I'm a Heading</Heading>
        </div>
        
        <div class="clear"></div>

        <div class="g6">
          <Text fontSize='md'>(md) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh magna, tincidunt vitae scelerisque a, tincidunt a risus. Ut placerat, libero id tempus mollis, neque enim volutpat quam, vitae eleifend orci magna nec nisl. Phasellus non odio nisl, a sodales mi. Nunc eget nibh mi. Vivamus nec magna eros. Proin in arcu felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse volutpat vestibulum magna et lobortis.</Text>
        </div>
        <div class="g6">Quisque lectus purus, pellentesque et vestibulum sit amet, sollicitudin nec nisi. Integer at risus dui, et sodales nisi. Nulla iaculis imperdiet magna et malesuada. Morbi accumsan lectus et velit porta vel aliquam dolor egestas. Curabitur tincidunt, sapien a elementum aliquam, metus arcu bibendum justo, at blandit tellus sapien vel turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus suscipit orci eget mi volutpat euismod.</div>
        
        <div class="clear"></div>
        <div class="g3">
          <Box bg='tomato' borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%' p={4} color='white'>
            <img src={logo3} width="300" height="300" alt="CoolBrand" />
          </Box>
        </div>
        <div class="g3">
          <Box bg='tomato' borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%' p={4} color='white'>
            <img src={logo4} width="290" height="270" alt="CoolBrand" />
          </Box>
        </div>
        <div class="g3">
          <Box bg='tomato' borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%' p={4} color='white'>
            <img src={logo5} width="300" height="300" alt="CoolBrand" />
          </Box>
        </div>
        <div class="g3">
          <Box bg='tomato' borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%' p={4} color='white'>
            <img src={logo6} width="300" height="300" alt="CoolBrand" />
          </Box>
        </div>
        <div class="clear"></div>

        <div class="g4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis lacus in metus tempor fringilla id eu nisi.</div>
        <div class="g4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis lacus in metus tempor fringilla id eu nisi.</div>
        <div class="g4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis lacus in metus tempor fringilla id eu nisi.</div>
        <div class="clear">&nbsp;</div>

        <div class="g8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis lacus in metus tempor fringilla id eu nisi. Quisque lectus purus, pellentesque et vestibulum sit amet, sollicitudin nec nisi. Integer at risus dui, et sodales nisi. Nulla iaculis imperdiet magna et malesuada. Morbi accumsan lectus et velit porta vel aliquam dolor egestas. Curabitur tincidunt, sapien a elementum aliquam, metus arcu bibendum justo, at blandit tellus sapien vel turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus suscipit orci eget mi volutpat euismod. Suspendisse volutpat vestibulum magna et lobortis.</div>
        <div class="g4">
        <Box bg='tomato' borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%' p={4} color='white'>
            <img src={logo2} width="300" height="300" alt="CoolBrand" />
        </Box>
        </div>
        <div class="clear"></div>

        <div class="g12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis lacus in metus tempor fringilla id eu nisi. Morbi accumsan lectus et velit porta vel aliquam dolor egestas. Curabitur tincidunt, sapien a elementum aliquam, metus arcu bibendum justo, at blandit tellus sapien vel turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
        <div class="clear">&nbsp;</div>

        <div class="g6"><img src="images/cat6.jpg"/></div>
        <div class="g6"><img src="images/cat7.jpg"/></div>

        <div class="clear">&nbsp;</div>
        
        <div class="gp33">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nulla eu justo porttitor molestie eu sit amet arcu. Sed feugiat molestie ipsum et faucibus.</div>
        <div class="gp33">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nulla eu justo porttitor molestie eu sit amet arcu. Sed feugiat molestie ipsum et faucibus.</div>
        <div class="gp33">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nulla eu justo porttitor molestie eu sit amet arcu. Sed feugiat molestie ipsum et faucibus.</div>

        <div class="clear">&nbsp;</div>

      </div>

    )
}