import { defineEventHandler, getQuery } from 'h3';
import PDFDocument from 'pdfkit';
import { u as useRuntimeConfig } from '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const download_get = defineEventHandler(async (event) => {
  const { chapterId, comicId } = getQuery(event);
  if (!chapterId || !comicId) {
    return {
      status: 400,
      message: "Bad request"
    };
  }
  const { baseURL } = useRuntimeConfig().public;
  const data = await $fetch(`/truyen-tranh/${comicId}/${chapterId}`, {
    baseURL
  });
  const { images, name } = data;
  const doc = new PDFDocument({ autoFirstPage: false });
  const filename = encodeURIComponent(`${name}(${chapterId})`);
  const stream = event.node.res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment;filename=${filename}.pdf`
  });
  doc.on("data", (chunk) => stream.write(chunk));
  doc.on("end", () => stream.end());
  for (const { src } of images) {
    const data2 = await $fetch(src, {
      responseType: "arrayBuffer"
    });
    const img = doc.openImage(data2);
    doc.addPage({ size: [img.width, img.height] });
    doc.image(img, 0, 0);
  }
  doc.end();
  event.node.res.end();
});

export { download_get as default };
//# sourceMappingURL=download.get.mjs.map
