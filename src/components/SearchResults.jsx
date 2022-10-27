function SearchResults({ isLoading, isError, data }) {
  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    return <div>에러 발생</div>;
  }

  if (!data.hits.length) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
      {data.hits.map((item) => (
        <div key={item.objectID}>
          <a href={item.url}>{item.title}</a>
          <div>작가: {item.author}</div>
          <div>작성일: {item.created_at}</div>
          <div>추천수: {item.points}</div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
