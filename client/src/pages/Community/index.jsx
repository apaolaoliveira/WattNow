import { useState } from "react";
import {
  PageContainer,
  Header,
  TopBar,
  Button,
  Select,
  Card,
  CardHeader,
  Author,
  Description,
  ShowMore,
  Actions,
  ImagePreview,
  ShowMoreButton,
} from "./style";
import Navbar from "../../components/Navbar";

const posts = [
  {
    id: 2,
    title: "Batteries for art project",
    type: "Request",
    author: "Author Lastname",
    description:
      "Post description lorem ipsum dolor sit amet. Post description lorem ipsum dolor sit amet...",
    image:
      "https://images.unsplash.com/photo-1571974094064-7525c7c7904d?fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Looking for keyboard replacements",
    type: "Request",
    author: "Jordan L.",
    description:
      "In need of working keyboard units for our after-school program. Any donation helps!",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Offering working monitors",
    type: "Offer",
    author: "Samantha G.",
    description:
      "I have 3 extra monitors that still work perfectly. Great for home offices or study setups.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Old phones available for parts",
    type: "Offer",
    author: "Daniel C.",
    description:
      "Cleaning out my drawer—offering old phones. Useful for parts or educational teardown.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Laptop chargers up for grabs",
    type: "Offer",
    author: "Ashley T.",
    description:
      "I’ve collected a few unused chargers (various brands) and would love to give them away.",
    image:
      "https://images.unsplash.com/photo-1612817158784-74f287eb7e3f?fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Need headphones for school lab",
    type: "Request",
    author: "Mr. Rivera",
    description:
      "Looking to equip a school lab with basic over-ear headphones. Donations welcome!",
    image:
      "https://images.unsplash.com/photo-1556898578-84fda70aa3c8?fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Offering HDMI cables and adapters",
    type: "Offer",
    author: "Grace P.",
    description:
      "I have extra HDMI cables and USB adapters. Would love to share with someone in need.",
    image:
      "https://images.unsplash.com/photo-1616627986600-0f69a71dbe8c?fit=crop&w=800&q=80",
  },
];


export default function CommunityPage() {
  const [sort, setSort] = useState("Newest");
  const [filter, setFilter] = useState("Offer");

  return (
    <>
    <Navbar />
    <PageContainer>
      <Header>Davis, California</Header>

      <TopBar>
        <Button>+ Add new post</Button>
        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option>Newest</option>
          <option>Oldest</option>
        </Select>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>Offers</option>
          <option>Requests</option>
        </Select>
      </TopBar>

      {posts.map((post) => (
        <Card key={post.id}>
          <div>
            <CardHeader>{post.type}</CardHeader>
            <h3>{post.title}</h3>
            <Author>👤 {post.author}</Author>
            <Description>{post.description}</Description>
            <ShowMore>Show more</ShowMore>
            <Actions>
              <Button>More Details</Button>
              <Button>Message Author</Button>
            </Actions>
          </div>
          <ImagePreview src={post.image} alt={post.title} />
        </Card>
      ))}

      <ShowMoreButton>Show more items</ShowMoreButton>
    </PageContainer>
    </>
  );
}