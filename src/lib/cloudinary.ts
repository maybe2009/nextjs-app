/**
 * Cloudinary工具函数
 * 用于生成和优化Cloudinary图片URL
 */

export interface CloudinaryConfig {
  cloudName: string;
  version?: string;
}

/**
 * 生成Cloudinary图片URL
 * @param publicId Cloudinary中的public_id
 * @param options 配置选项
 * @returns 完整的Cloudinary图片URL
 */
export function getCloudinaryUrl(
  publicId: string,
  options: {
    cloudName: string;
    transformations?: string;
    format?: string;
    quality?: number;
  }
): string {
  const {
    cloudName,
    transformations = "",
    format = "auto",
    quality = "auto",
  } = options;

  // 构建基础URL
  let url = `https://res.cloudinary.com/${cloudName}/image/upload`;

  // 添加转换参数
  if (transformations) {
    url += `/${transformations}`;
  }

  // 添加质量参数
  if (quality !== "auto") {
    url += `,q_${quality}`;
  }

  // 添加格式参数
  if (format !== "auto") {
    url += `,f_${format}`;
  }

  // 添加public_id
  url += `/${publicId}`;

  return url;
}
