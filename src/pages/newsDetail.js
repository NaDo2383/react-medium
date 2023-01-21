import React from 'react'
import { useParams } from 'react-router'
import "../css/NewsDetail.css"
import NewsDetailHeader from '../components/newsDetailHeader';
import NewsDetailBody from '../components/newsDetailBody';

export default function NewsDetail() {
  const { id } = useParams();
  return (
    <div>
      <nav>
        <NewsDetailHeader />
        <NewsDetailBody newsId={id} />
      </nav>
    </div>
  )
}
