import React from "react";

export default function PostItem() {
  return (
    <>
      <div className="grid max-w-2xl gap-16 p-5 pl-8 mx-auto mb-6 md:mb-20 md:p-0 md:grid-cols-1fr-5fr">
        <div className="hidden md:block">
          <p className="text-sm text-right text-grey-500">Currently</p>
        </div>
        <div className="relative pl-16 max-w-prose border-gray-800 md:pl-16 prose-dark">
          <p className="text-sm text-gray-500 md:hidden">Currently</p>
          <p className="!mt-0 !mb-6 text-sm md:text-base">
            Iterating on this website and previous projects. Feel free to
            contact me if you like to build something cool together!
          </p>
          <div className="absolute top-0 left-0 w-3 h-3 ">
            <div className="w-full h-full -translate-x-1/2 translate-y-1/3">
              <span className="absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
              <span className="absolute w-full h-full bg-green-400 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid max-w-2xl gap-16 p-5 pl-8 mx-auto mb-6 md:mb-20 md:p-0 md:grid-cols-1fr-5fr">
        <div className="hidden md:block">
          <p className="font-mono text-xs leading-6 text-right text-gray-500 ">
            Jan 15, 2022
          </p>
        </div>
        <div className="relative pb-12 pl-6 md:pl-16 border-l border-gray-800">
          <p className="mb-0.5 font-mono text-xs leading-6 text-gray-500 -translate-y-1/4 md:hidden">
            Jan 15, 2022
          </p>
          <div className="prose-sm prose-dark md:prose-dark">Featured on</div>
          <div className="absolute top-0 left-0 w-3 h-3 border-2 border-gray-200 rounded-full md:translate-y-1/2 md:ring-8 ring-gray-900"></div>
          <div className="p-4 mt-5 space-y-5 text-sm text-gray-400 bg-gray-900 bg-opacity-50 rounded-lg shadow-highlight md:p-5 ">
            <div>
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham. Where can I get some? There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
