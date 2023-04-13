import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { Sections } from "@/consts";
import { slideIn } from "@/utils/motion";
import { styles } from "@/styles/styles";

import Section from "./Section";
import InputWrapper from "./InputWrapper";
import { EarthCanvas } from "./canvas";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactForm>();
  const onSubmit = handleSubmit((values) => console.log(values));
  return (
    <Section idName={Sections.Contact}>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h3 className={styles.sectionHeadText}> Contact.</h3>

          <form className="mt-12 flex flex-col gap-8" onSubmit={onSubmit}>
            <InputWrapper label="Name">
              <input
                className={styles.input}
                placeholder="What's your name?"
                maxLength={20}
                pattern={"^[A-Za-z ]+$"}
                title="Letters and spaces only"
                required
                {...register("name")}
                aria-invalid={Boolean(errors.name)}
              />
            </InputWrapper>
            <InputWrapper label="Email">
              <input
                className={styles.input}
                placeholder="What's your Email?"
                type="email"
                required
                {...register("email")}
                aria-invalid={Boolean(errors.email)}
              />
            </InputWrapper>
            <InputWrapper label="Message">
              <textarea
                className={styles.input}
                placeholder="What's your message?"
                rows={7}
                required
                {...register("message")}
                aria-invalid={Boolean(errors.message)}
              />
            </InputWrapper>
            <button className="bg-tertiary hover:bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              Send
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
