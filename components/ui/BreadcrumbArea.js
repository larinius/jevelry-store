import React, { useState, useEffect, useContext } from "react";
import * as Icon from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation, Trans } from "next-i18next";
import ProductContext from "../../components/context/ProductContext";

const BreadcrumbArea = () => {
  const router = useRouter();
  const { category, setCategory, products, meta } = useContext(ProductContext);
  const [breadcrumbs, setBreadcrumbs] = useState(null);
  const { t } = useTranslation("common");

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");

      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  useEffect(() => {
    const linkPath = router.asPath.split("/");
    const page = "" + linkPath.slice(-1);

  }, [breadcrumbs]);

  if (!breadcrumbs) {
    return null;
  }

  if (router.pathname !== "/") {
    return <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">
                        <Icon.House />
                      </a>
                    </li>
                    {breadcrumbs.map((breadcrumb, i) => {
                      if (products[0]?.category.title) {
                        const cat = products[0]?.category.title.toLowerCase();
                        breadcrumb.breadcrumb = breadcrumb.breadcrumb.replace(
                          "product",
                          t(cat)
                        );
                        breadcrumb.href = breadcrumb.href.replace(
                          "/product",
                          `/store/${cat}`
                        );
                      }

                      return (
                        <li
                          key={breadcrumb.href}
                          className="breadcrumb-item active"
                          aria-current={t(breadcrumb.breadcrumb)}
                        >
                          <Link href={breadcrumb.href}>
                            {t(breadcrumb.breadcrumb)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
  } else {
    return <></>;
  }
};

export default BreadcrumbArea;
