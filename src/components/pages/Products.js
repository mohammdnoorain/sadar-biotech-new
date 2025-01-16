import React, { useState } from "react";
import HeroSectionProduct from "../HeroSectionProduct";
import Footer from "../Footer";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const productData = [
    {
      id: 1,
      name: "API, Intermediates & Excipient",
      table: [
        {
          category: "API & Intermediates",
          products: [
            { id: 1, name: "Amitriptyline HCL", standards: ["IP", "BP", "USP"] },
            { id: 2, name: "Bisoprolol Fumarate", standards: ["USP", "BP"] },
            { id: 3, name: "Calcium D Saccharate", standards: ["USP"] },
            { id: 4, name: "Clotrimazole", standards: ["IP", "BP", "USP"] },
            { id: 5, name: "Desloratadine", standards: ["EP"] },
            { id: 6, name: "Diclofenac Sodium", standards: ["IP", "USP"] },
            { id: 7, name: "Fluconazole", standards: ["IP", "BP", "USP", "EP"] },
            { id: 8, name: "Folic Acid", standards: ["IP", "BP", "USP"] },
            { id: 9, name: "Gabapentin", standards: ["IP", "BP", "USP"] },
            { id: 10, name: "Gliclazide", standards: ["IP", "BP"] },
            { id: 11, name: "Iron sucrose", standards: ["USP"] },
            { id: 12, name: "Labetalol HCL", standards: ["USP", "BP", "IP"] },
            { id: 13, name: "Levocetirizine HCL", standards: ["IP", "USP"] },
            { id: 14, name: "Lisinopril", standards: ["USP"] },
            { id: 15, name: "Loratidine", standards: ["IP", "P", "USP"] },
            { id: 16, name: "Lumefantrine", standards: ["USP"] },
            { id: 17, name: "Minoxidil", standards: ["BP", "IP", "EP", "USP"] },
            { id: 18, name: "N-Acetyl-L-Cysteine", standards: ["USP", "EP"] },
            { id: 19, name: "Nebivolol Hydrochloride", standards: ["IP"] },
            { id: 20, name: "Nortriptyline HCL", standards: ["IP", "BP", "SP"] },
            { id: 21, name: "Ondansetron Hydrochloride", standards: ["BP", "USP", "EP"] },
            { id: 22, name: "Phenylephrine HCL", standards: ["IP", "BP", "USP"] },
            { id: 23, name: "Rosuvastatin Calcium", standards: ["IP", "BP", "EP"] },
            { id: 24, name: "Salbutamol Sulphate", standards: ["IP", "BP"] },
            { id: 25, name: "Sodium Valproate", standards: ["IP", "BP"] },
            { id: 26, name: "Topiramate", standards: ["IP", "USP"] },
            { id: 27, name: "Paracetamol", standards: ["CEP", "IP"] }
          ],
        },
        {
          category: "Excipient",
          products: [
            { name: "Crospovidone" },
            { name: "Ethyl Cellulose" },
            { name: "Hydroxy Propyl Methyl Cellulose" },
            { name: "Hydroxypropyl Methyl Cellulose Phthalate" },
            { name: "Low Substituted Hydroxypropyl Cellulose" },
            { name: "Fumed Silica" },
            { name: "Povidone K" },
            { name: "Lactulose" },
            { name: "Ethyl cellulose" },
            { name: "Hypromellose Phthalate" },
            { name: "Trichloroisocyanzuric Acid Dry" },
            { name: "Hydroxypropyl Methyl Cellulose or Polyvinyl alcohol" },
            { name: "Pregelatinized Starch" },
            { name: "Creatine Mono 200 mesh" },
            { name: "Ashwagandha Root Powder" },
            { name: "Xanthum Gum" },
            { name: "Sucralose USP/FCC" },
            { name: "Alpha Lipoic Acid USP" },
            { name: "Pancreatin" }
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Pesticides & Fertilizer",
      table: [
        {
          category: "Pesticides & Fertilizer",
          products: [
            { name: "Alpha Cypermethrin", purity: "97%", endUse: "Insecticide", packing: "50 Kg Drum" },
            { name: "Aluminum phosphide", purity: "56%", endUse: "Insecticide", packing: "20 kg Box" },
            { name: "Beauveria Bassiana", purity: "-", endUse: "Bio Fungicide", packing: "-" },
            { name: "Bifenthrin", purity: "96% - 98%", endUse: "Insecticide", packing: "120 Kg Drum" },
            { name: "Chlorantraniliprole", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
            { name: "Chlormequat Chloride", purity: "60% - 78%", endUse: "PGR", packing: "50/1000 Lt" },
            { name: "Chlorpyrifos", purity: "97% - 98%", endUse: "Insecticide", packing: "275 Kg" },
            { name: "Cloquintocet mexyl", purity: "95% - 97%", endUse: "Herbicide", packing: "25 Kg" },
            { name: "Clomazone", purity: "98%", endUse: "Herbicide", packing: "25/50 Kg" },
            { name: "Copper Hydroxide", purity: "77%", endUse: "Fungicide", packing: "10 Kg" },
            { name: "Copper oxy chloride", purity: "58%", endUse: "Fungicide", packing: "25 Kg" },
            { name: "Cymoxanil", purity: "98%", endUse: "Fungicide", packing: "25 Kg" },
            { name: "Cypermethrin", purity: "93% - 95%", endUse: "Insecticide", packing: "25 Kg, 200 Kg/225/240 Kg" },
            { name: "Cyproconazol", purity: "95%", endUse: "Fungicide", packing: "25 Kg" },
            { name: "Deltamethrin", purity: "98%", endUse: "Insecticide", packing: "25 Kg, 50Kg, 100 kg" },
            { name: "Dicamba", purity: "98%", endUse: "Herbicide", packing: "50 Kg/800 Kg" },
            { name: "2,4 D acid", purity: "98%", endUse: "Herbicide", packing: "900 Kg, 500Kg, 25 Kg" },
            { name: "2,4D Ester", purity: "97%", endUse: "Herbicide", packing: "1100Kg, 250 Kg" },
            { name: "Fipronil", purity: "95%", endUse: "Herbicide", packing: "25kg Drum" },
            { name: "Flufenacet", purity: "95%", endUse: "Herbicide", packing: "25 Kg" },
            { name: "Fluroxypyr", purity: "98%", endUse: "Herbicide", packing: "25/50 Kg" },
            { name: "Indoxocarb", purity: "9:1", endUse: "Insecticide", packing: "25 Kg" },
            { name: "Isoproturon", purity: "97%", endUse: "Herbicide", packing: "25/50Kg" },
            { name: "Lambda cyhalothrin", purity: "97%", endUse: "Insecticide", packing: "25 Kg, 50 Kg" },
            { name: "Mancozeb", purity: "80-85%", endUse: "Fungicide", packing: "10kg 15Kg" },
            { name: "Metamition", purity: "98%", endUse: "Herbicide", packing: "20 Kg" },
            { name: "Metribuzin", purity: "97%", endUse: "Herbicide", packing: "25 Kg" },
            { name: "Mesotrione", purity: "97%", endUse: "Herbicide", packing: "25/50 Kg" },
            { name: "Neem Oil", purity: "-", endUse: "Bio Fungicide", packing: "200 kg" },
            { name: "Permethrin", purity: "92% - 94%", endUse: "Insecticide", packing: "200Kg,25 Kg" },
            { name: "Propiconazole", purity: "95%", endUse: "Fungicide", packing: "220 Kg drum" },
            { name: "Propoxur", purity: "98%", endUse: "Insecticide", packing: "25 Kg Drum" },
            { name: "Pseudomonas fluorescens", purity: "-", endUse: "Bacteria", packing: "-" },
            { name: "Tebuconazole", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
            { name: "Thiacloprid", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
            { name: "Transfluthrin", purity: "98%", endUse: "Insecticide", packing: "25Kg, 50Kg" },
            { name: "Tribasic copper sulphate", purity: "97%", endUse: "Fungicide", packing: "25 kg" },
            { name: "Trichoderma Viride", purity: "-", endUse: "Bio Fungicide", packing: "-" },
            { name: "Verticillium Lecanii", purity: "-", endUse: "Bio Fungicide", packing: "-" },
            { name: "Bit 20%", purity: "20 (ppm)", endUse: "Biocide", packing: "200kg Drum" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Surfactant & Solvent",
      table: [
        {
          category: "Surfactants (Agro)",
          products: [
            {
              id: 1,
              name: "SBAG T20, 60, 80, 85",
              chemical: "Polysorbate 20,60,80,85",
              packaging: "200 kg drum, IBC packing",
            },
            {
              id: 2,
              name: "SBAG TA15, TA5",
              chemical: "Tallow Amine 15,5",
              packaging: "200 kg drum, IBC packing",
            },
            {
              id: 3,
              name: "SBAG 800",
              chemical: "Isodecyl Alcohol Ethoxylate",
              packaging: "200 kg drum, IBC packing",
            },
            {
              id: 4,
              name: "SBAG GLK",
              chemical: "Blend of surfactants for glyphosate formulations",
              packaging: "200 kg drum, IBC packing",
            },
            {
              id: 5,
              name: "SBAG 671",
              chemical: "Blend of surfactants for EC formulations",
              packaging: "200 kg drum, IBC packing",
            },
            {
              id: 6,
              name: "SBAG 672",
              chemical: "Blend of surfactants for EC formulations",
              packaging: "200 kg drum, IBC packing",
            },
            {
              id: 7,
              name: "SBAG CE 36",
              chemical: "Castor oil ethoxylate 36 mole",
              packaging: "200 kg drum, IBC packing",
            },
            {
              id: 8,
              name: "SBAG CE 40",
              chemical: "Castor oil ethoxylate 40 mole",
              packaging: "200 kg drum, IBC packing",
            },
            {
              id: 9,
              name: "SBAG EBE",
              chemical: "Blend of surfactants for SC formulations",
              packaging: "200 kg drum, IBC packing",
            },
            {
              id: 10,
              name: "SBAG PYZ",
              chemical: "Blend of surfactants for SC formulations",
              packaging: "200 kg drum, IBC packing",
            },
          ],
        },


        {
          category: "Surfactants (Home & Personal care)",
          products: [
            {
              id: 1,
              name: "Phenoxyethanol",
              packaging: "200 kg Drum, IBC",
            },
            {
              id: 2,
              name: "Ethyl hexyl glycerine",
              packaging: "200 kg Drum, IBC",
            },
            {
              id: 3,
              name: "SBAG T20 (Polysorbate)",
              packaging: "200 kg Drum, IBC",
            },
            {
              id: 4,
              name: "Ethylene glycol monostearate",
              packaging: "200 kg Drum, IBC",
            },
            {
              id: 5,
              name: "Ethylene glycol distearate",
              packaging: "200 kg Drum, IBC",
            },
            {
              id: 6,
              name: "SLES 70%",
              packaging: "200 kg Drum, IBC",
            },
            {
              id: 7,
              name: "PEG 40 hydrogenated castor oil",
              packaging: "200 kg Drum, IBC",
            },
            {
              id: 8,
              name: "APG",
              packaging: "200 kg Drum, IBC",
            },
            {
              id: 9,
              name: "BKC 50/80",
              packaging: "200 kg Drum, IBC",
            },
            {
              id: 10,
              name: "CAPB",
              packaging: "200 kg Drum, IBC",
            },
          ],
        },
        {
          category: "Solvent",
          products: [
          
            {
              id: 1,
              name: "Isophorone",
              packaging: "200 Kg drum, IBC",
            },
            {
              id: 2,
              name: "Dimethyl Sulphate",
              packaging: "200 Kg drum, IBC",
            },
            {
              id: 3,
              name: "Solvent 150",
              packaging: "200 Kg drum, IBC",
            },
            {
              id: 4,
              name: "Solvent 200",
              packaging: "200 Kg drum, IBC",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Agro-Technical Products",
      table: [
        {
          category: "Agro-Technical Products",
          products: [
            {
              id: 1,
              name: "Alpha cypermethrin",
              purity: "97%",
              packaging: "50 Kg drum",
              category: "Insecticide",
            },
            {
              id: 2,
              name: "Cypermethrin",
              purity: "93%",
              packaging: "25/200/225/240 Kg",
              category: "Insecticide",
            },
            {
              id: 3,
              name: "Deltamethrin",
              purity: "98%",
              packaging: "25/50/100 Kg",
              category: "Insecticide",
            },
            {
              id: 4,
              name: "Permethrin",
              purity: "92%",
              packaging: "25/200 Kg",
              category: "Insecticide",
            },
            {
              id: 5,
              name: "Dicamba",
              purity: "98%",
              packaging: "50/800 Kg",
              category: "Herbicide",
            },
            {
              id: 6,
              name: "Fipronil",
              purity: "95%",
              packaging: "25 Kg",
              category: "Insecticide",
            },
            {
              id: 7,
              name: "Chloremequat Chloride",
              purity: "60% - 78%",
              packaging: "50/1000 Litres",
              category: "Bio stimulant/ PGR",
            },
            {
              id: 8,
              name: "Cloquintocet Mexyl",
              purity: "97%",
              packaging: "25 Kg",
              category: "Herbicide",
            },
            {
              id: 9,
              name: "Chlorpyriphos",
              purity: "97%",
              packaging: "275 Kg",
              category: "Insecticide",
            },
            {
              id: 10,
              name: "Copper oxychloride",
              purity: "58%",
              packaging: "10 Kg",
              category: "Fungicide",
            },
            {
              id: 11,
              name: "Copper hydroxide",
              purity: "77%",
              packaging: "25 Kg",
              category: "Fungicide",
            },
            {
              id: 12,
              name: "Tribasic copper sulphate",
              purity: "97%",
              packaging: "25 Kg",
              category: "Fungicide",
            },
            {
              id: 13,
              name: "Aluminium phosphide",
              purity: "56%",
              packaging: "20 Kg box",
              category: "Insecticide",
            },
            {
              id: 14,
              name: "Propiconazole",
              purity: "95%",
              packaging: "220 Kg drum",
              category: "Pesticide",
            },
            {
              id: 15,
              name: "Thiamethoxam",
              purity: null,
              packaging: null,
              category: null,
            },
            {
              id: 16,
              name: "Metribuzin",
              purity: "97%",
              packaging: "25 Kg",
              category: "Agro chemical- technical",
            },
            {
              id: 17,
              name: "Metamition",
              purity: "98%",
              packaging: "20 Kg",
              category: "Herbicide",
            },
            {
              id: 18,
              name: "Thiachloprid",
              purity: "97%",
              packaging: "25 Kg",
              category: "Insecticide",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <HeroSectionProduct />

      <div className="w-full p-6 bg-gradient-to-b from-green-300 to-blue-100  py-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-black hover:text-white transition-colors duration-300" >Our Products</h1>
        {productData.map((item, index) => (
          <div
            key={item.id}
            className="border border-white rounded-lg mb-4 p-6 bg-white"
          >
            <h2
              onClick={() => toggleDropdown(index)}
              className="text-2xl font-semibold text-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-green-500"
            >
              {item.name}
            </h2>
            {activeIndex === index && (
             <div>
             {item.table.map((tableItem, i) => (
               <div key={i} className="mb-6">
                 <h3 className="text-xl font-semibold mb-4 cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-blue-500">
                   {tableItem.category}
                 </h3>
                 <div className="overflow-x-auto">
                   <table className="w-full border-collapse border border-blue-500">
                     <thead>
                       <tr className="bg-gray-100">
                         {Object.keys(tableItem.products[0] || {}).map((header, idx) => (
                           <th
                             key={idx}
                             className="border border-blue-300 p-2 capitalize text-sm md:text-base cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-blue-500"
                           >
                             {header}
                           </th>
                         ))}
                       </tr>
                     </thead>
                     <tbody>
                       {tableItem.products.map((product, j) => (
                         <tr
                           key={j}
                           className="hover:bg-green-500 cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-white"
                         >
                           {Object.values(product).map((value, idx) => (
                             <td
                               key={idx}
                               className="border border-blue-500 p-2 text-sm md:text-base"
                             >
                               {value}
                             </td>
                           ))}
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </div>
             ))}
           </div>
                       )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
