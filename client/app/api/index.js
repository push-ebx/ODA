import { unstable_noStore as noStore } from 'next/cache';
export const strapi_url = 'http://localhost:1337'

export async function getCarouselCards() {
  noStore();
  const query_url = strapi_url + '/api/carousel-cards?populate=*';

  try {
    const response = await fetch(query_url)
    const {data} = await response.json();

    return data.map(item => {
      const {title, list, image} = item.attributes;
      const image_url = image.data.attributes.formats.medium.url;
      return { title: title, list: list.split('\n'), image: strapi_url + image_url };
    });
  } catch (error){
    console.log("error", error.message)
  }
}

export async function getCarouselButtons() {
  noStore();
  const query_url = strapi_url + '/api/carousel-buttons?populate=*';

  try {
    const response = await fetch(query_url)
    const {data} = await response.json();

    return data.map(item => {
      const {text_button, icon_button} = item.attributes;
      const image_url = icon_button.data.attributes.url;
      return { text_button, icon_button: strapi_url + image_url };
    });
  } catch (error){
    console.log("error", error.message)
  }
}

export async function getFAQ() {
  noStore();
  const query_url = strapi_url + '/api/faqs';

  try {
    const response = await fetch(query_url)
    const {data} = await response.json();

    return data.map(item => {
      const { question, answer } = item.attributes;
      return { question, answer };
    });
  } catch (error){
    console.log("error", error.message)
  }
}

export async function getPresentationLink() {
  noStore();
  const query_url = strapi_url + '/api/home-page?populate=*';

  try {
    const response = await fetch(query_url)
    const {data} = await response.json();
    return strapi_url + data.attributes.presentation.data.attributes.url;
  } catch (error){
    console.log("error", error.message)
  }
}