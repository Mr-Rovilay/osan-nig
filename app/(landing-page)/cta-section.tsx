import Button from "@/components/Button";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 py-20">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-5">
          Ready to Build with the Best?
        </h2>
        <p className="text-lg mb-10">
          Contact us today to get started on your next construction project.
        </p>
        <Button text="Get in Touch" variant="secondary" />
      </div>
    </section>
  );
};

export default CTASection;
