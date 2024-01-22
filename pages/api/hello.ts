// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import img1 from '@/public//doctors/d1.jpg';
import img2 from '@/public//doctors/d2.jpg';
import img3 from '@/public//doctors/d3.jpg';
import img4 from '@/public//doctors/d4.jpg';
import img5 from '@/public//doctors/d5.jpg';
import img6 from '@/public//doctors/d6.jpg';
import img7 from '@/public//doctors/d7.jpg';
import img8 from '@/public//doctors/d8.jpg';
import img9 from '@/public//doctors/d9.jpg';
import img10 from '@/public//doctors/d10.jpg';
import img11 from '@/public//doctors/d11.jpg';
import img12 from '@/public//doctors/d12.jpg';
import img13 from '@/public//doctors/d13.jpg';
import img14 from '@/public//doctors/d14.jpg';
import img15 from '@/public//doctors/d15.jpg';
import img16 from '@/public//doctors/d16.jpg';
import img17 from '@/public//doctors/d17.jpg';
import img18 from '@/public//doctors/d18.jpg';
import img19 from '@/public//doctors/d19.jpg';
import img20 from '@/public//doctors/d20.jpg';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json([
    {
      id: 1,
      photo : img1,
      name : "Dr. Priya Sharma",
      expertise : "Orthopedic Physiotherapist",
      city : "Kolkata",
      years : "6",
    },
    {
      id: 2,
      photo : img2,
      name : "Dr. Aniket Patel",
      expertise: "Neurological Physiotherapist",
      city: "Kolkata",
      years : "15",
    },
    {
      id: 3,
      photo : img3,
      name: "Dr. Aisha Kapoor",
      expertise: "Pediatric Physiotherapist",
      city: "Mumbai",
      years : "7",
    },
    {
      id: 4,
      photo : img4,
      name: "Dr. Rajesh Singh",
      expertise: "Geriatric Physiotherapist",
      city: "Mumbai",
      years : "13",
    },
    {
      id: 5,
      photo : img5,
      name: "Dr. Nandini Gupta",
      expertise: "Dermatologist",
      city: "Bangalore",
      years : "10",
    },
    {
      id: 6,
      photo : img6,
      name: "Dr. Arjun Reddy",
      expertise: "Respiratory Physiotherapist",
      city: "Bangalore",
      years : "12",
    },
    {
      id: 7,
      photo : img7,
      name: "Dr. Pooja Verma",
      expertise: "Sports Physiotherapist",
      city: "New Delhi",
      years : "11",
    },
    {
      id: 8,
      photo : img8,
      name: "Dr. Rohit Mishra",
      expertise: "Women's Health Physiotherapist",
      city: "New Delhi",
      years : "13",
    },
    {
      id: 9,
      photo : img9,
      name: "Dr. Sneha Joshi",
      expertise: "Oncology Physiotherapist",
      city: "New Delhi",
      years : "18",
    },
    {
      id: 10,
      photo : img10,
      name: "Dr. Harish Kumar",
      expertise: "Musculoskeletal Physiotherapist",
      city: "Pune",
      years : "20",
    },
    {
      id: 11,
      photo : img11,
      name: "Dr. Kavita Rajput",
      expertise: "Pelvic Health Physiotherapist",
      city: "Pune",
      years : "16",
    },
    {
      id: 12,
      photo : img12,
      name: "Dr. Vikram Singhania",
      expertise: "Vestibular Physiotherapist",
      city: "Hyderabad",
      years : "9",
    },
    {
      id: 13,
      photo : img13,
      name: "Dr. Meera Reddy",
      expertise: "Hand Therapy Physiotherapist",
      city: "Hyderabad",
      years : "14",
    },
    {
      id: 14,
      photo : img14,
      name: "Dr. Sanjay Verma",
      expertise: "Aquatic Physiotherapist",
      city: "Ranchi",
      years : "5",
    },
    {
      id: 15,
      photo : img15,
      name: "Dr. Ananya Das",
      expertise: "Lymphedema Physiotherapist",
      city: "Patna",
      years : "4",
    },
    {
      id: 16,
      photo : img16,
      name: "Dr. Neha Sharma",
      expertise: "Orthopedic Physiotherapist",
      city: "Jaipur",
      years : "8",
    },
    {
      id: 17,
      photo : img17,
      name: "Dr. Rohan Kapoor",
      expertise: "Pediatric Physiotherapist",
      city: "Indore",
      years : "13",
    },
    {
      id: 18,
      photo : img18,
      name: "Dr. Anjali Singh",
      expertise: "Neurological Physiotherapist",
      city: "Chennai",
      years : "17",
    },
    {
      id: 19,
      photo : img19,
      name: "Dr. Arnav Reddy",
      expertise: "Respiratory Physiotherapist",
      city: "Chandigarh",
      years : "7",
    },
    {
      id: 20,
      photo : img20,
      name: "Dr. Preeti Verma",
      expertise: "Geriatric Physiotherapist",
      city: "Lucknow",
      years : "19",
    },
  ])
}
