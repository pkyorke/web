import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  ogImage: string;
  path?: string;
}

const SITE_ORIGIN = "https://pkyorke.com";

const ensureMeta = (
  selector: string,
  create: () => HTMLMetaElement,
  updater: (el: HTMLMetaElement) => void
) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  updater(element);
};

export const usePageMeta = ({ title, description, ogImage, path = "/" }: PageMetaOptions) => {
  useEffect(() => {
    document.title = title;

    ensureMeta(
      'meta[name="description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        return meta;
      },
      (el) => {
        el.setAttribute("content", description);
      }
    );

    ensureMeta(
      'meta[property="og:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        return meta;
      },
      (el) => {
        el.setAttribute("content", title);
      }
    );

    ensureMeta(
      'meta[property="og:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:description");
        return meta;
      },
      (el) => {
        el.setAttribute("content", description);
      }
    );

    ensureMeta(
      'meta[property="og:image"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image");
        return meta;
      },
      (el) => {
        el.setAttribute("content", ogImage);
      }
    );

    ensureMeta(
      'meta[property="og:url"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:url");
        return meta;
      },
      (el) => {
        el.setAttribute("content", `${SITE_ORIGIN}${path}`);
      }
    );

    ensureMeta(
      'meta[name="twitter:card"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "twitter:card");
        return meta;
      },
      (el) => {
        el.setAttribute("content", "summary_large_image");
      }
    );
  }, [description, ogImage, path, title]);
};
