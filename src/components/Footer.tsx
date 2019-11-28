import React from 'react';

interface Props {
  finishedNum: number,
  unfinishedNum: number,
}

const Footer = ({ finishedNum, unfinishedNum }: Props) => {
  return (
    <>
      {finishedNum}
      {unfinishedNum}
    </>
  )
}

export default Footer;
