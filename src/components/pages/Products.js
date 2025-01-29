import React, { useState } from "react";
import HeroSectionProduct from "../HeroSectionProduct";
import Footer from "../Footer";
import Showcase2 from "../Showcase2";
import "../styleCssFiles/ProductShowcase.css"; // Import the CSS file for styles

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
            { id: 20, name: "Ondansetron Hydrochloride", standards: ["BP", "USP", "EP"] },
            { id: 21, name: "Phenylephrine HCL", standards: ["IP", "BP", "USP"] },
            { id: 22, name: "Rosuvastatin Calcium", standards: ["IP", "BP", "EP"] },
            { id: 23, name: "Salbutamol Sulphate", standards: ["IP", "BP"] },
            { id: 24, name: "Sodium Valproate", standards: ["IP", "BP"] },
            { id: 25, name: "Topiramate", standards: ["IP", "USP"] },
            { id: 26, name: "Paracetamol", standards: ["CEP", "IP"] }
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
    // {
    //   id: 2,
    //   name: "Pesticides & Fertilizer",
    //   table: [
    //     {
    //       category: "Pesticides & Fertilizer",
    //       products: [
    //         { name: "Alpha Cypermethrin", purity: "97%", endUse: "Insecticide", packing: "50 Kg Drum" },
    //         { name: "Aluminum phosphide", purity: "56%", endUse: "Insecticide", packing: "20 kg Box" },
    //         { name: "Beauveria Bassiana", purity: "-", endUse: "Bio Fungicide", packing: "-" },
    //         { name: "Bifenthrin", purity: "96% - 98%", endUse: "Insecticide", packing: "120 Kg Drum" },
    //         { name: "Chlorantraniliprole", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
    //         { name: "Chlormequat Chloride", purity: "60% - 78%", endUse: "PGR", packing: "50/1000 Lt" },
    //         { name: "Chlorpyrifos", purity: "97% - 98%", endUse: "Insecticide", packing: "275 Kg" },
    //         { name: "Cloquintocet mexyl", purity: "95% - 97%", endUse: "Herbicide", packing: "25 Kg" },
    //         { name: "Clomazone", purity: "98%", endUse: "Herbicide", packing: "25/50 Kg" },
    //         { name: "Copper Hydroxide", purity: "77%", endUse: "Fungicide", packing: "10 Kg" },
    //         { name: "Copper oxy chloride", purity: "58%", endUse: "Fungicide", packing: "25 Kg" },
    //         { name: "Cymoxanil", purity: "98%", endUse: "Fungicide", packing: "25 Kg" },
    //         { name: "Cypermethrin", purity: "93% - 95%", endUse: "Insecticide", packing: "25 Kg, 200 Kg/225/240 Kg" },
    //         { name: "Cyproconazol", purity: "95%", endUse: "Fungicide", packing: "25 Kg" },
    //         { name: "Deltamethrin", purity: "98%", endUse: "Insecticide", packing: "25 Kg, 50Kg, 100 kg" },
    //         { name: "Dicamba", purity: "98%", endUse: "Herbicide", packing: "50 Kg/800 Kg" },
    //         { name: "2,4 D acid", purity: "98%", endUse: "Herbicide", packing: "900 Kg, 500Kg, 25 Kg" },
    //         { name: "2,4D Ester", purity: "97%", endUse: "Herbicide", packing: "1100Kg, 250 Kg" },
    //         { name: "Fipronil", purity: "95%", endUse: "Herbicide", packing: "25kg Drum" },
    //         { name: "Flufenacet", purity: "95%", endUse: "Herbicide", packing: "25 Kg" },
    //         { name: "Fluroxypyr", purity: "98%", endUse: "Herbicide", packing: "25/50 Kg" },
    //         { name: "Indoxocarb", purity: "9:1", endUse: "Insecticide", packing: "25 Kg" },
    //         { name: "Isoproturon", purity: "97%", endUse: "Herbicide", packing: "25/50Kg" },
    //         { name: "Lambda cyhalothrin", purity: "97%", endUse: "Insecticide", packing: "25 Kg, 50 Kg" },
    //         { name: "Mancozeb", purity: "80-85%", endUse: "Fungicide", packing: "10kg 15Kg" },
    //         { name: "Metamition", purity: "98%", endUse: "Herbicide", packing: "20 Kg" },
    //         { name: "Metribuzin", purity: "97%", endUse: "Herbicide", packing: "25 Kg" },
    //         { name: "Mesotrione", purity: "97%", endUse: "Herbicide", packing: "25/50 Kg" },
    //         { name: "Neem Oil", purity: "-", endUse: "Bio Fungicide", packing: "200 kg" },
    //         { name: "Permethrin", purity: "92% - 94%", endUse: "Insecticide", packing: "200Kg,25 Kg" },
    //         { name: "Propiconazole", purity: "95%", endUse: "Fungicide", packing: "220 Kg drum" },
    //         { name: "Propoxur", purity: "98%", endUse: "Insecticide", packing: "25 Kg Drum" },
    //         { name: "Pseudomonas fluorescens", purity: "-", endUse: "Bacteria", packing: "-" },
    //         { name: "Tebuconazole", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
    //         { name: "Thiacloprid", purity: "97%", endUse: "Insecticide", packing: "25 Kg" },
    //         { name: "Transfluthrin", purity: "98%", endUse: "Insecticide", packing: "25Kg, 50Kg" },
    //         { name: "Tribasic copper sulphate", purity: "97%", endUse: "Fungicide", packing: "25 kg" },
    //         { name: "Trichoderma Viride", purity: "-", endUse: "Bio Fungicide", packing: "-" },
    //         { name: "Verticillium Lecanii", purity: "-", endUse: "Bio Fungicide", packing: "-" },
    //         { name: "Bit 20%", purity: "20 (ppm)", endUse: "Biocide", packing: "200kg Drum" },
    //       ],
    //     },
    //   ],
    // },
    {
      id: 3,
      name: "Surfactant & Solvent",
      table: [
        {
          category: "Surfactants ",
          products: [
            {
              id: 1,
              Name: "SBAG OR 36,40",
              chemicalName: "Castor Oil Ethoxylates",
              casNo: "61791-12-6",
            },
            {
              id: 2,
              Name: "SBAG VO/ 2003",
              chemicalName: "Polyethylene Glycol Fatty Acid Ester",
              casNo: "220037-02-5",
            },
            {
              id: 3,
              Name: "SBAG 4894",
              chemicalName: "Fatty Alcohol Ethoxylate",
              casNo: "68131-39-5",
            },
            {
              id: 4,
              Name: "SBAG B10",
              chemicalName: "Fatty Alcohol Ethoxylated",
              casNo: "68439-46-3",
            },
            {
              id: 5,
              Name: "SBAG ET/15,25",
              chemicalName: "Tallow Amine Ethoxylated",
              casNo: "61791-26-2",
            },
            {
              id: 6,
              Name: "SBAG 800",
              chemicalName: "Isodecyl Alcohol Ethoxylate",
              casNo: "61827-42-7",
            },
            {
              id: 7,
              Name: "SBAG LT 70",
              chemicalName: "Lauryl Alcohol Ethoxylates 7 moles of EO",
              casNo: "68439-50-9",
            },
            {
              id: 8,
              Name: "SBAG 860/P",
              chemicalName: "Isodecyl Alcohol Ethoxylate",
              casNo: "78330-20-8",
            },
            {
              id: 9,
              Name: "SBAG 4DV",
              chemicalName: "Polyarylphenyl ether sulphate ammonium salt",
              casNo: "137672-70-9",
            },
            {
              id: 10,
              Name: "SBAG CY/8",
              chemicalName: "Tristyrenated Phenol Ethoxylated",
              casNo: "99734-09-5",
            },
            {
              id: 11,
              Name: "SBAG FL",
              chemicalName: "Tristyrylphenol ethoxylated 16 EO phosphate ester, TEA Sal",
              casNo: "105362-40-1",
            },
            {
              id: 12,
              Name: "SBAG T20",
              chemicalName: "Polysorbate 20",
              casNo: "9005-64-5",
            },
            {
              id: 13,
              Name: "SBAG T60",
              chemicalName: "Polysorbate 60",
              casNo: "9005-67-8",
            },
            {
              id: 14,
              Name: "SBAG T80",
              chemicalName: "Polysorbate 80",
              casNo: "9005-65-6",
            },
            {
              id: 15,
              Name: "SBAG T85",
              chemicalName: "Polysorbate 85",
              casNo: "9005-70-3",
            }
          ],
        },


        // {
        //   category: "Surfactants (Home & Personal care)",
        //   products: [
        //     {
        //       id: 1,
        //       name: "Phenoxyethanol",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //     {
        //       id: 2,
        //       name: "Ethyl hexyl glycerine",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //     {
        //       id: 3,
        //       name: "SBAG T20 (Polysorbate)",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //     {
        //       id: 4,
        //       name: "Ethylene glycol monostearate",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //     {
        //       id: 5,
        //       name: "Ethylene glycol distearate",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //     {
        //       id: 6,
        //       name: "SLES 70%",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //     {
        //       id: 7,
        //       name: "PEG 40 hydrogenated castor oil",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //     {
        //       id: 8,
        //       name: "APG",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //     {
        //       id: 9,
        //       name: "BKC 50/80",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //     {
        //       id: 10,
        //       name: "CAPB",
        //       packaging: "200 kg Drum, IBC",
        //     },
        //   ],
        // },
        {
          category: "Solvent",
          products: [
          
            {
              id: 1,
              name: "Isophorone",
              packaging: "195 Kg Drum",
              purity: "95-99%",
            },
            {
              id: 2,
              name: "Solvent S 150",
              packaging: "200 Kg Drum, IBC",
            },
            {
              id: 3,
              name: "Solvent S 200",
              packaging: "200 Kg Drum, IBC",
            }
          ],
        },
      ],
    },
    // {
    //   id: 4,
    //   name: "Agro-Technical Products  old",
    //   table: [
    //     {
    //       category: "Agro-Technical Products",
    //       products: [
    //         {
    //           id: 1,
    //           name: "Alpha cypermethrin",
    //           purity: "97%",
    //           packaging: "50 Kg drum",
    //           category: "Insecticide",
    //         },
    //         {
    //           id: 2,
    //           name: "Cypermethrin",
    //           purity: "93%",
    //           packaging: "25/200/225/240 Kg",
    //           category: "Insecticide",
    //         },
    //         {
    //           id: 3,
    //           name: "Deltamethrin",
    //           purity: "98%",
    //           packaging: "25/50/100 Kg",
    //           category: "Insecticide",
    //         },
    //         {
    //           id: 4,
    //           name: "Permethrin",
    //           purity: "92%",
    //           packaging: "25/200 Kg",
    //           category: "Insecticide",
    //         },
    //         {
    //           id: 5,
    //           name: "Dicamba",
    //           purity: "98%",
    //           packaging: "50/800 Kg",
    //           category: "Herbicide",
    //         },
    //         {
    //           id: 6,
    //           name: "Fipronil",
    //           purity: "95%",
    //           packaging: "25 Kg",
    //           category: "Insecticide",
    //         },
    //         {
    //           id: 7,
    //           name: "Chloremequat Chloride",
    //           purity: "60% - 78%",
    //           packaging: "50/1000 Litres",
    //           category: "Bio stimulant/ PGR",
    //         },
    //         {
    //           id: 8,
    //           name: "Cloquintocet Mexyl",
    //           purity: "97%",
    //           packaging: "25 Kg",
    //           category: "Herbicide",
    //         },
    //         {
    //           id: 9,
    //           name: "Chlorpyriphos",
    //           purity: "97%",
    //           packaging: "275 Kg",
    //           category: "Insecticide",
    //         },
    //         {
    //           id: 10,
    //           name: "Copper oxychloride",
    //           purity: "58%",
    //           packaging: "10 Kg",
    //           category: "Fungicide",
    //         },
    //         {
    //           id: 11,
    //           name: "Copper hydroxide",
    //           purity: "77%",
    //           packaging: "25 Kg",
    //           category: "Fungicide",
    //         },
    //         {
    //           id: 12,
    //           name: "Tribasic copper sulphate",
    //           purity: "97%",
    //           packaging: "25 Kg",
    //           category: "Fungicide",
    //         },
    //         {
    //           id: 13,
    //           name: "Aluminium phosphide",
    //           purity: "56%",
    //           packaging: "20 Kg box",
    //           category: "Insecticide",
    //         },
    //         {
    //           id: 14,
    //           name: "Propiconazole",
    //           purity: "95%",
    //           packaging: "220 Kg drum",
    //           category: "Pesticide",
    //         },
    //         {
    //           id: 15,
    //           name: "Thiamethoxam",
    //           purity: null,
    //           packaging: null,
    //           category: null,
    //         },
    //         {
    //           id: 16,
    //           name: "Metribuzin",
    //           purity: "97%",
    //           packaging: "25 Kg",
    //           category: "Agro chemical- technical",
    //         },
    //         {
    //           id: 17,
    //           name: "Metamition",
    //           purity: "98%",
    //           packaging: "20 Kg",
    //           category: "Herbicide",
    //         },
    //         {
    //           id: 18,
    //           name: "Thiachloprid",
    //           purity: "97%",
    //           packaging: "25 Kg",
    //           category: "Insecticide",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      id: 5,
      name: "Agro-Technical Products",
      table: [
        {
          category: "Agro-Technical Products",
          products: [
            {
              id: 1,
              name: "Alpha Cypermethrin",
              concentration: "97%",
              category: "Insecticide",
              packaging: "50 Kg Drum",
            },
            {
              id: 2,
              name: "Aluminum Phosphide",
              concentration: "56%",
              category: "Insecticide",
              packaging: "20 Kg Box",
            },
            {
              id: 3,
              name: "Bifenthrin",
              concentration: "96% – 98%",
              category: "Insecticide",
              packaging: "120 Kg Drum",
            },
            {
              id: 4,
              name: "Chlorantraniliprole",
              concentration: "97%",
              category: "Insecticide",
              packaging: "25 Kg",
            },
            {
              id: 5,
              name: "Chlormequat Chloride",
              concentration: "60% – 78%",
              category: "PGR",
              packaging: "50/1000 Lt",
            },
            {
              id: 6,
              name: "Chlorpyrifos",
              concentration: "97% – 98%",
              category: "Insecticide",
              packaging: "275 Kg",
            },
            {
              id: 7,
              name: "Cloquintocet Mexyl",
              concentration: "95% – 97%",
              category: "Herbicide",
              packaging: "25 Kg",
            },
            {
              id: 8,
              name: "Copper Hydroxide",
              concentration: "77%",
              category: "Fungicide",
              packaging: "10 Kg",
            },
            {
              id: 9,
              name: "Copper Oxychloride",
              concentration: "58%",
              category: "Fungicide",
              packaging: "25 Kg",
            },
            {
              id: 10,
              name: "Cypermethrin",
              concentration: "93% – 95%",
              category: "Insecticide",
              packaging: ["25 Kg", "200 Kg", "225 Kg", "240 Kg"],
            },
            {
              id: 11,
              name: "Cyproconazol",
              concentration: "95%",
              category: "Fungicide",
              packaging: "25 Kg",
            },
            {
              id: 12,
              name: "Deltamethrin",
              concentration: "98%",
              category: "Insecticide",
              packaging: ["25 Kg", "50 Kg", "100 Kg"],
            },
            {
              id: 13,
              name: "Dicamba",
              concentration: "98%",
              category: "Herbicide",
              packaging: ["50 Kg", "800 Kg"],
            },
            {
              id: 14,
              name: "2,4 D Acid",
              concentration: "98%",
              category: "Herbicide",
              packaging: ["900 Kg", "500 Kg", "25 Kg"],
            },
            {
              id: 15,
              name: "2,4D Ester",
              concentration: "97%",
              category: "Herbicide",
              packaging: ["1100 Kg", "250 Kg"],
            },
            {
              id: 16,
              name: "Fipronil",
              concentration: "95%",
              category: "Herbicide",
              packaging: "25 Kg Drum",
            },
            {
              id: 17,
              name: "Indoxocarb",
              concentration: "9:1",
              category: "Insecticide",
              packaging: "25 Kg",
            },
            {
              id: 18,
              name: "Lambda Cyhalothrin",
              concentration: "97%",
              category: "Insecticide",
              packaging: ["25 Kg", "50 Kg"],
            },
            {
              id: 19,
              name: "Mancozeb",
              concentration: "80-85%",
              category: "Fungicide",
              packaging: ["10 Kg", "15 Kg"],
            },
            {
              id: 20,
              name: "Metribuzin",
              concentration: "97%",
              category: "Herbicide",
              packaging: "25 Kg",
            },
            {
              id: 21,
              name: "Mesotrione",
              concentration: "97%",
              category: "Herbicide",
              packaging: ["25 Kg", "50 Kg"],
            },
            {
              id: 22,
              name: "Permethrin",
              concentration: "92% – 94%",
              category: "Insecticide",
              packaging: ["200 Kg", "25 Kg"],
            },
            {
              id: 23,
              name: "Propiconazole",
              concentration: "95%",
              category: "Fungicide",
              packaging: "220 Kg Drum",
            },
            {
              id: 24,
              name: "Propoxur",
              concentration: "98%",
              category: "Insecticide",
              packaging: "25 Kg Drum",
            },
            {
              id: 25,
              name: "Thiacloprid",
              concentration: "97%",
              category: "Insecticide",
              packaging: "25 Kg",
            },
            {
              id: 26,
              name: "Transfluthrin",
              concentration: "98%",
              category: "Insecticide",
              packaging: ["25 Kg", "50 Kg"],
            },
            {
              id: 27,
              name: "Tribasic Copper Sulphate",
              concentration: "97%",
              category: "Fungicide",
              packaging: "25 Kg",
            },
            {
              id: 28,
              name: "Trichoderma Viride",
              concentration: "Bio",
              category: "Fungicide",
              packaging: "Not Specified",
            },
          ],
        },
      ],
    },

  ];

  return (
    <div>
      <HeroSectionProduct />
      {/* <Showcase2/> */}

      <div className="w-full p-6 bg-gradient-to-r from-white via-blue-50 to-green-200 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-500 hover:text-blue-800 transition-colors duration-300" >Our Products</h1>
        {productData.map((item, index) => (
          <div
            key={item.id}
            className="border border-white rounded-lg mb-4 p-6 bg-white"
          >
            <h2
              onClick={() => toggleDropdown(index)}
              className="text-2xl font-semibold text-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-green-500"
            >
                 <span className="text-3xl mr-5">
              {activeIndex === index ? "-" : "+"}
            </span>

              {item.name}
           
            </h2>
         
            <div className="relative w-full flex justify-center items-center">
        <div className="burning-line movable-line"></div>
      </div>
            {activeIndex === index && (
             <div>
             {item.table.map((tableItem, i) => (
               <div key={i} className="mb-6">
                 <h3 className="text-xl font-semibold mb-4 cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-blue-800">
                   {tableItem.category}
                 </h3>
                 <div className="overflow-x-auto">
                   <table className="w-full border-collapse border border-blue-500">
                     <thead>
                       <tr className="bg-blue-800">
                         {Object.keys(tableItem.products[0] || {}).map((header, idx) => (
                           <th
                             key={idx}
                             className="border border-blue-300 p-2 capitalize text-sm md:text-base cursor-pointer transition-transform duration-300 hover:scale-105 text-white"
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
