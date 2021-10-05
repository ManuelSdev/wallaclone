import React from 'react';
import { getTags } from "../../../../api/ads"
import CheckboxGroup from '../../../shared/formFields/CheckBoxGroup';

function SelectTags({ mainLabel, ...props }) {

  const [tags, setTags] = React.useState([]);
  console.log("0- RENDER EN SELECTTAGS", tags)

  React.useEffect(() => {
    //getTags().then(setTags).then(console.log("Finaliza setTags con getTags:", tags));

    //Uso de función cleanUp
    const applyTags = async () => {
      console.log("1- await getTagss")
      const tagss = await getTags()
      mounted && console.log("2- terminado await getTagss: AHORA SET TAGS")
      mounted && setTags(tagss)
      mounted && console.log("3- Finaliza setTags con getTags:", tags)
      // console.log("TAGS BAJADOS", tagss)

    }
    let mounted = true;
    applyTags()
    return () => {
      console.log("4- Tira a mounted false")
      mounted = false;
    };
  }, []);

  return (
    <div className="field">
      <label className="label mb-auto">{mainLabel}</label>
      <CheckboxGroup options={tags} {...props} />
    </div>
  )
}

export default SelectTags;
