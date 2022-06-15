import React from 'react'
import style from "../styles.module/Menspage.module.css"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
export const Product = ({el}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className={style.prindiv}>
                        <div className={style.primgquidiv}>
                            <div style={{display:"flex",justifyContent:"flex-end",fontSize:"25px"}}><i class="fa-regular fa-heart"></i></div>
                            <img className={style.primg}  src={el.imgsrc}/>
                            <div  onClick={onOpen}className={style.prquickdiv}>Quick View</div>
                                  <Modal size={"3xl"}closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                    <ModalHeader>Create your account</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                      <div style={{border:"1px solid green",display:"flex",height:"50%",width:"100%",justifyContent:"space-around"}}>
                                        <div style={{border:"1px solid red",width:"50%",height:"400px"}}>
                                        <div style={{display:"flex",justifyContent:"flex-end",fontSize:"25px"}}><i class="fa-regular fa-heart"></i></div>
                                        <div style={{display:"flex",justifyContent:"flex-end",fontSize:"25px"}}><i class="fa-regular fa-share-from-square"></i></div>
                                          <img style={{height:"80%",margin:"auto"}} src={el.imgsrc}/>
                                        </div>
                                        <div  style={{width:"40%",border:"1px solid red",lineHeight:"40px"}}>
                                          <div style={{fontSize:"18px",fontWeight:"600"}}>{el.brand}</div>
                                          <div style={{fontSize:"14px",fontWeight:"600"}}>{el.description}</div>
                                          <div style={{fontSize:"20px",fontWeight:"600"}}>{el.price}</div>
                                          <div className={style.prselectstore}><a href="">BUY FROM STORE</a></div>
                                        </div>
                                      </div>
                                      <div>
                                          <div style={{marginBottom:"20px",fontSize:"20px",fontWeight:"600"}}>Shop with Modesens Concierge</div>
                                          <div>We will fulfill your order by finding the best price available from our partner stores, applying any applicable promotions and providing assistance on tracking, returns or anything else you may need.</div>
                                      </div>
                                    </ModalBody>

                                    <ModalFooter>
                                    </ModalFooter>
                                    </ModalContent>
                                    </Modal>
                        </div>
                      
                        <div className={style.prindiprop}>
                        <div>{el.brand}</div>
                        <p  style={{width:"100%",display:"inline"}}>{el.description}</p>
                        <div>{el.price}</div>
                        <div>{el.stores}</div>
                        </div>
</div>
  )
}

{/* <div className={style.prquickdiv}>Quick View</div> */}
