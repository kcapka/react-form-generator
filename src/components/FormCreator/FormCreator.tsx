import { useState } from "react";
import FieldForm from "./FieldForm";
import { create } from "domain";

export const FormCreator = () => {
  const [openField, setOpenField] = useState<number | null>(0);
  const [createdFields, setCreatedFields] = useState<any>({});
  const [newFieldIndex, setNewFieldIndex] = useState(0);

  const handleAddField = () => {
    setCreatedFields({ ...createdFields, [newFieldIndex]: { type: "text" } });
    setNewFieldIndex(newFieldIndex + 1);
    setOpenField(newFieldIndex);
  };

  const handleDeleteField = (i: number) => {
    const filteredIndices = Object.keys(createdFields)?.filter(
      (idx) => Number(idx) !== i,
    );
    let updated:any = {};
    for (let i = 0; i < filteredIndices.length; i++) {
        updated[i] = createdFields[filteredIndices[i]];
    }
    setNewFieldIndex(newFieldIndex - 1);
    setOpenField(null);
    setCreatedFields(updated)
  };

  const handleFieldOpen = (i: number) => {
    openField === i ? setOpenField(null) : setOpenField(i);
  };

  console.log("currentFields", createdFields)

  return (
    <section className="default-px default-py">
      <div className="max-w-[1200px] mx-auto bg-background-cards rounded-lg p-6">
        {/* Main form */}
        <div className="">
          <h2 className="text-offwhite font-medium text-2xl mb-6">Schema:</h2>
          <div className="flex flex-col items-start gap-6">
            {Object.keys(createdFields)?.length > 0 &&
              Object.keys(createdFields)?.map((_: any, i: number) => (
                <div key={i} className="border-b border-b-border pb-6 w-full">
                  <div className="flex justify-between items-center gap-4">
                    <div
                      onClick={() => handleFieldOpen(i)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <span
                        className={`${openField === i && "rotate-90"} w-fit h-fit duration-200`}
                      >
                        <svg
                          height="12px"
                          width="12px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 185.343 185.343"
                          fill="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0" />

                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path
                                  className="fill-[#e8edf4]"
                                  d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                />{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </span>
                      <p className="text-offwhite text-lg font-medium leading-none">
                        {createdFields[i]?.name || "New field"}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteField(i)}
                      className="cursor-pointer"
                    >
                      <img
                        src="/images/trash-icon-red.svg"
                        alt="Trash icon"
                        className="h-5"
                      />
                    </button>
                  </div>
                  {/* Actual field content */}
                  <div
                    className={`${openField === i ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"} duration-200 grid overflow-hidden pl-5`}
                  >
                    <FieldForm
                      createdFields={createdFields}
                      setCreatedFields={setCreatedFields}
                      index={i}
                    />
                  </div>
                </div>
              ))}
            {/* Add field button */}
            <button
              onClick={handleAddField}
              className="text-offwhite bg-primary py-2 px-3 rounded-md font-semibold leading-none cursor-pointer duration-200 hover:bg-primary-hover"
            >
              Add field +
            </button>
          </div>
        </div>
        {/* Previewer */}

        {/* Output code */}
      </div>
    </section>
  );
};

export default FormCreator;
