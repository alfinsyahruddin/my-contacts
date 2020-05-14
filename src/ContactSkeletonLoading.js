import React from 'react';
import './styles.css';
import Skeleton from 'react-loading-skeleton';

const ContactSkeletonLoading = () => {
  return (
    <div className="contact-container" key={0}>
      <Skeleton circle width={75} height={75} duration={0.5} />
      <div className="text-container">
        <div style={{ marginBottom: 10 }}>
          <Skeleton width={200} height={21} duration={0.5} />
        </div>
        <Skeleton width={120} height={14} duration={0.5} />
      </div>
    </div>
  )
}

export default ContactSkeletonLoading;