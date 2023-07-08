import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ProductContext from "../../components/context/ProductContext";

const BreadcrumbArea = () => {
  const router = useRouter();
  const { products } = useContext(ProductContext);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const { t } = useTranslation("common");

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/").filter(Boolean);

      const pathArray = linkPath.map((path, i) => {
        const breadcrumb = path === "product" ? products[0]?.category.title.toLowerCase() : t(path);
        const href = "/" + linkPath.slice(0, i + 1).join("/");

        return {
          breadcrumb: decodeURIComponent(breadcrumb), // Decode the URL-encoded text
          href: path === "product" ? href.replace("/product", `/store/${breadcrumb}`) : href,
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router, products, t]);

  const Breadcrumbs = () => {
    if (router.pathname !== "/") {
      return (
        <div className="breadcrumb-area">
          <div className="container">
            <Row>
              <Col xs={12}>
                <div className="breadcrumb-wrap">
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">
                          <Icon.House />
                        </Link>
                      </li>
                      {breadcrumbs.map((breadcrumb, i) => (
                        <li key={breadcrumb.href} className="breadcrumb-item active" aria-current={t(breadcrumb.breadcrumb)}>
                          <Link href={breadcrumb.href}>{t(breadcrumb.breadcrumb)}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const memoizedBreadcrumb = useMemo(() => <Breadcrumbs />, [breadcrumbs]);

  return <>{memoizedBreadcrumb}</>;
};

export default BreadcrumbArea;
