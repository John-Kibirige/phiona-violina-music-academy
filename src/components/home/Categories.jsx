import youngStar from '../../assets/latest/young-star-violin.jpg';
import teenStar from '../../assets/latest/teen-guitar.jpg';
import adultLessons from '../../assets/latest/adult-lessons.jpg';
import privateLessons from '../../assets/latest/private-lessons.jpg';

const Categories = () => {
  const categoriesData = [
    {
      title: ' Young Children (Ages 3-10)',
      url: youngStar,
      description:
        'Our fun and interactive lessons introduce young children to the world of music. Through engaging activities and hands-on instrument play, we nurture a love for music from an early age.',
      alt: ' a photo of a young kid playing a violin',
    },
    {
      title: 'Teens (Ages 11-17)',
      url: teenStar,
      description:
        'Our teen programs are designed to help young musicians refine their skills, explore different genres, and gain confidence. Join us to learn advanced techniques and prepare for performances.',
      alt: 'a photo of a teenager playing a guitar',
    },
    {
      title: 'Adults (18 & Up)',
      url: adultLessons,
      description:
        'It’s never too late to start or return to music! Our adult lessons cater to all levels, from beginners to advanced musicians. Learn at your own pace and enjoy the fulfillment that comes from playing music.',
      alt: 'a photo adult playing a violin',
    },
    {
      title: ' Private Lessons',
      url: privateLessons,
      description:
        'For personalized instruction, our private lessons offer one-on-one attention tailored to your individual needs and goals. Perfect for those seeking focused learning and rapid progress.',
      alt: ' a photo of a tutor carrying out a private session',
    },
  ];

  const Category = ({ url, title, description, alt }) => {
    return (
      <div className="flex flex-col gap-2 pt-2 pb-4 px-4 rounded-md shadow-lg max-w-[360px] lg:max-w-[310px] mx-auto transition-transform duration-150 group hover:scale-105 hover:cursor-default">
        <div className="rounded-full w-24 h-24 shadow-lg mx-auto ">
          <img
            src={url}
            alt={alt}
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        <h3 className="text-secondary">{title}</h3>
        <p className=" text-sm text-gray-600 tracking-[0.01rem] leading-[1.375rem]">
          {description}
        </p>
        <button className=" text-sm bg-primary hover:bg-primary-dark w-fit mx-auto px-3 py-[0.375rem] text-white rounded active:scale-95 mt-2">
          Sign Up Today
        </button>
      </div>
    );
  };
  return (
    <section className="px-4 py-5 lg:py-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl md:leading-10 text-secondary-dark font-bold tracking-wide ">
        Our Music Groups
      </h2>
      <div className="mt-5 flex flex-wrap gap-8 lg:gap-5 ">
        {categoriesData.map(({ title, url, description, alt }) => (
          <Category
            title={title}
            url={url}
            description={description}
            alt={alt}
            key={title}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
