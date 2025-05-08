import { feed1, feed2, feed3, feed4, feed5, feed6 } from "@/utils/ImageExports";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/DraggableCard";

interface itemTypes {
  title: string;
  className: string;
  image: string;
}

const items: itemTypes[] = [
  {
    title: "Sneaker",
    image: feed1,
    className: "absolute top-10 md:left-[0%] xl:left-[20%] rotate-[-5deg]",
  },
  {
    title: "Sofa set",
    image: feed2,
    className: "absolute top-1/3 left-[0%] xl:left-[25%] rotate-[-7deg]",
  },
  {
    title: "Samsung Galaxy",
    image: feed3,
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },
  {
    title: "T-shirt",
    image: feed4,
    className: "absolute top-1/3 left-[55%] rotate-[10deg]",
  },
  {
    title: "Skincare",
    image: feed5,
    className: "absolute top-40 right-[35%] rotate-[2deg]",
  },
  {
    title: "Bracelet",
    image: feed6,
    className: "absolute top-24 left-[65%] rotate-[-7deg]",
  },
];

const SocialFeed = () => {
  return (
    <DraggableCardContainer className="relative flex h-[70dvh] w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-figmaPrimary select-none md:text-4xl dark:text-neutral-500 font-cursive ">
        If it's your first visit to SnapKart, you have to shop.
      </p>
      {items.map((item: itemTypes) => (
        <DraggableCardBody className={item.className} key={item.title}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10  object-cover contrast-150"
          />
          <h3 className="mt-4 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300 font-inter">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
};

export default SocialFeed;
