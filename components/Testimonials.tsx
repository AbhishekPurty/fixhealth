import React from 'react';
import { Carousel } from 'antd';
import Testimonycard from './Testimonycard';
import img1 from '@/public/p1.jpg';
import img2 from '@/public/p2.jpg';
import img3 from '@/public/p3.jpg';
import img4 from '@/public/p4.jpg';
const contentStyle: React.CSSProperties = {
  margin: 10,
  height: 'auto',
  color: '#fff',
//   lineHeight: '10px',
  textAlign: 'center',
  background: '#22252a',
};
const Testimonials = () => {
  const onChange = (currentSlide: any) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}><Testimonycard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tortor non massa lacinia iaculis. Aliquam feugiat lacus tellus, ac tempus lorem sagittis ut. Sed ut orci accumsan, sollicitudin lacus sed, pretium mi." name="Abhishek" profession="Student" issue="Chest Pain" p_image={img1}/></h3>
            </div>
            <div>
                <h3 style={contentStyle}><Testimonycard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tortor non massa lacinia iaculis. Aliquam feugiat lacus tellus, ac tempus lorem sagittis ut. Sed ut orci accumsan, sollicitudin lacus sed, pretium mi." name="Anirban" profession="Student" issue="Mental Pain" p_image={img2}/></h3>
            </div>
            <div>
                <h3 style={contentStyle}><Testimonycard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tortor non massa lacinia iaculis. Aliquam feugiat lacus tellus, ac tempus lorem sagittis ut. Sed ut orci accumsan, sollicitudin lacus sed, pretium mi." name="Amman" profession="Student" issue="Leg Pain" p_image={img3}/></h3>
            </div>
            <div>
                <h3 style={contentStyle}><Testimonycard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tortor non massa lacinia iaculis. Aliquam feugiat lacus tellus, ac tempus lorem sagittis ut. Sed ut orci accumsan, sollicitudin lacus sed, pretium mi." name="Justin" profession="Student" issue="Liver Pain" p_image={img4}/></h3>
            </div>
        
    </Carousel>
  )
}

export default Testimonials
