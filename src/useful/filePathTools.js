import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

function convertOrderToFilePath(order) {
  // codingFolder; google cloud
  return order.map((file_name) => {
    return ref(storage, `codingFolder/${file_name}`);
  });
}

function getDownloadUrlPromises(references) {
  /*
    references: google firebase reference.
    returns an array of all the promises , where each promise points to an eventual URL. 
    */
  return references.map(async (reference) => {
    const url = await getDownloadURL(reference);
    return url;
  });
}

async function getDownloadSrc(video_order, img_order) {
  const video_references = convertOrderToFilePath(video_order);
  const img_references = convertOrderToFilePath(img_order);

  // console.log("references", video_references, img_references);

  const video_promises = getDownloadUrlPromises(video_references);
  const img_promises = getDownloadUrlPromises(img_references);

  // console.log("promises", video_promises, img_promises);

  const video_urls = await Promise.all(video_promises);
  const img_urls = await Promise.all(img_promises);

  // console.log("urls", video_urls, img_urls);

  const img_urls_pairing = img_urls.map((url, idx) => {
    return [img_order[idx], url];
  });

  const img_urls_object = Object.fromEntries(img_urls_pairing);
  return {
    video_urls,
    img_urls_object,
  };
}

export { convertOrderToFilePath, getDownloadUrlPromises, getDownloadSrc };
