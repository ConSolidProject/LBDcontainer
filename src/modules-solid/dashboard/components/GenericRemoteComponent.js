import React, {useRef, useEffect} from 'react'
import {
    store as s,
    session as sess,
    projects as p,
    activeResources as sel,
    selectedElements as se,
    selectionId as sId,
    openOptions as o,
    trigger as t,
  } from "../../../atoms";
import { atom, useRecoilState, useRecoilValue } from "recoil";

export default ({mount, module, children, inactive}) => {
    const store = useRecoilValue(s);
    const [activeResources, setActiveResources] = useRecoilState(sel)
    const [selectedElements, setSelectedElements] = useRecoilState(se)
    const [projects, setProjects] = useRecoilState(p);
    const [selectionId, setSelectionId] = useRecoilState(sId)
    const [trigger, setTrigger] = useRecoilState(t)
    const [openOptions, setOpenOptions] = useRecoilState(o)
    
    const sharedProps = {
      trigger,
      setTrigger,
      projects,
      setProjects,
      store,
      activeResources,
      setActiveResources,
      selectedElements,
      setSelectedElements,
      selectionId,
      setSelectionId
    }


    const ref = useRef(null)
    useEffect(() => {
        mount(ref.current, {sharedProps, module, children, inactive})
    })
    return <div ref={ref}/>
}