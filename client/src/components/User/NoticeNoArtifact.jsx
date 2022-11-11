function NoticeNoArtifact() {
  return (
    <p>
      Oops! No wallet connected :(
        <br />
      {/*  Cannot find <span className="code">SimpleStorage</span> contract artifact.
      Please complete the above preparation first, then restart the react dev server. */}
      ⚠️ Please connect to Metamask and then Refresh the page!
    </p>
  );
}

export default NoticeNoArtifact;
