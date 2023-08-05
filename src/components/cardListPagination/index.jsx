import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const styles = {
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",   
  }
}

export default function CardListPagination({ onPagination }) {

  const handlePage = (e) => {
    console.log("handlePage", e.target.textContent);
    onPagination(parseInt(e.target.textContent));
  }

  return (
    <div style={styles.div}>
      <Stack spacing={2}>
        <Pagination count={10} color="primary" onChange={handlePage} />
      </Stack>
    </div>
  );
}