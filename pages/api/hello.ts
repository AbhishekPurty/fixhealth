// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
//   expertise: string
//   city: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json([
    {
      id: 1,
      name : "Dr. Priya Sharma",
      expertise : "Orthopedic Physiotherapist",
      city : "Kolkata",
      years : "6",
    },
    {
      id: 2,
      name : "Dr. Aniket Patel",
      expertise: "Neurological Physiotherapist",
      city: "Kolkata",
      years : "15",
    },
    {
      id: 3,
      name: "Dr. Aisha Kapoor",
      expertise: "Pediatric Physiotherapist",
      city: "Mumbai",
      years : "7",
    },
    {
      id: 4,
      name: "Dr. Rajesh Singh",
      expertise: "Geriatric Physiotherapist",
      city: "Mumbai",
      years : "13",
    },
    {
      id: 5,
      name: "Dr. Nandini Gupta",
      expertise: "Dermatologist",
      city: "Bangalore",
      years : "10",
    },
    {
      id: 6,
      name: "Dr. Arjun Reddy",
      expertise: "Respiratory Physiotherapist",
      city: "Bangalore",
      years : "12",
    },
    {
      id: 7,
      name: "Dr. Pooja Verma",
      expertise: "Sports Physiotherapist",
      city: "New Delhi",
      years : "11",
    },
    {
      id: 8,
      name: "Dr. Rohit Mishra",
      expertise: "Women's Health Physiotherapist",
      city: "New Delhi",
      years : "13",
    },
    {
      id: 9,
      name: "Dr. Sneha Joshi",
      expertise: "Oncology Physiotherapist",
      city: "New Delhi",
      years : "18",
    },
    {
      id: 10,
      name: "Dr. Harish Kumar",
      expertise: "Musculoskeletal Physiotherapist",
      city: "Pune",
      years : "20",
    },
    {
      id: 11,
      name: "Dr. Kavita Rajput",
      expertise: "Pelvic Health Physiotherapist",
      city: "Pune",
      years : "16",
    },
    {
      id: 12,
      name: "Dr. Vikram Singhania",
      expertise: "Vestibular Physiotherapist",
      city: "Hyderabad",
      years : "9",
    },
    {
      id: 13,
      name: "Dr. Meera Reddy",
      expertise: "Hand Therapy Physiotherapist",
      city: "Hyderabad",
      years : "14",
    },
    {
      id: 14,
      name: "Dr. Sanjay Verma",
      expertise: "Aquatic Physiotherapist",
      city: "Ranchi",
      years : "5",
    },
    {
      id: 15,
      name: "Dr. Ananya Das",
      expertise: "Lymphedema Physiotherapist",
      city: "Patna",
      years : "4",
    },
    {
      id: 16,
      name: "Dr. Neha Sharma",
      expertise: "Orthopedic Physiotherapist",
      city: "Jaipur",
      years : "8",
    },
    {
      id: 17,
      name: "Dr. Rohan Kapoor",
      expertise: "Pediatric Physiotherapist",
      city: "Indore",
      years : "13",
    },
    {
      id: 18,
      name: "Dr. Anjali Singh",
      expertise: "Neurological Physiotherapist",
      city: "Chennai",
      years : "17",
    },
    {
      id: 19,
      name: "Dr. Arnav Reddy",
      expertise: "Respiratory Physiotherapist",
      city: "Chandigarh",
      years : "7",
    },
    {
      id: 20,
      name: "Dr. Preeti Verma",
      expertise: "Geriatric Physiotherapist",
      city: "Lucknow",
      years : "19",
    },
  ])
}
